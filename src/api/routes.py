"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Packages
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

from flask_migrate import Migrate 
from flask_swagger import swagger 
from flask_cors import CORS 

from api.admin import setup_admin

api = Blueprint('api', __name__)



#---------------------------------------------------------------------------------------------------
#              POST USER SIGNUP
#---------------------------------------------------------------------------------------------------

@api.route('/signup', methods=['POST'])
def signup():
    request_body = request.get_json(force=True)
    user = User(email = request_body["email"], password = request_body["password"])
    db.session.add(user)
    db.session.commit()

    return jsonify(), 200

#---------------------------------------------------------------------------------------------------
#               TOKEN LOGING POST
#---------------------------------------------------------------------------------------------------

@api.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # Check in the database the email and password
    user = User.query.filter_by(email = email, password = password).first()
    if user is None:

        # if User is not in the database
        return jsonify({"msg": "Wrong email or password"}), 401
    # Generate a token with User_ID
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id})
    
#---------------------------------------------------------------------------------------------------
#               PRIVATED JWT GET
#---------------------------------------------------------------------------------------------------

@api.route("/private", methods=["GET"])
@jwt_required()
def protected():

    # Access to user_id with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email }), 200

#---------------------------------------------------------------------------------------------------
#               GET USERS  
#----------------------------------------------- ----------------------------------------------------

@api.route('/users', methods=['GET'])
def handle_users():
    # get all the people
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    return jsonify({
        "result": all_users
    }), 200

#---------------------------------------------------------------------------------------------------
#              USERS DELETE
#---------------------------------------------------------------------------------------------------

@api.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    
    user1 = User.query.get(user_id)
    if user1 is None:
        raise APIException("User not found", status_code=404)
    db.session.delete(user1)
    db.session.commit()

    return jsonify("ok"), 200

#---------------------------------------------------------------------------------------------------
#               USERS PUT Edit ROUTE
#---------------------------------------------------------------------------------------------------

@api.route('/users/<int:user_id>', methods=['PUT'])
def edit_user(user_id):

    request_body_user = request.get_json()
    
    user1 = User.query.get(user_id)
    if user1 is None:
        raise APIException("User not found", status_code=404)

    if "username" in request_body_user:
        user1.username = request_body_user["username"]

    db.session.commit()

    return jsonify(request_body_user), 200

#---------------------------------------------------------------------------------------------------
#               GET USER FAVORITES
#---------------------------------------------------------------------------------------------------

@api.route('/users/<int:user_id>/favorites', methods=['GET'])
def handle_favorites(user_id):

    response_packages = User.query.filter_by(id=user_id).first().favPackages    
    Packages = list(map(lambda x: x.serialize(), response_packages))
    

    return jsonify({
        "FavPackages": Packages,
    }), 200

#---------------------------------------------------------------------------------------------------
#               POST FAVORITE PACKAGE
#---------------------------------------------------------------------------------------------------

@api.route('/favorites/packages/<int:packages_id>', methods=['POST'])
def create_fav_package(packages_id):
    user_id = 1
    user = User.query.get(user_id)
    package = Packages.query.get(packages_id)
    favList = User.query.filter_by(id=user_id).first().favPackages
    favList.append(package)
    db.session.commit()

    return jsonify({
        "FavPackages": list(map(lambda x : x.serialize(), favList))
    }), 200

#---------------------------------------------------------------------------------------------------
#                       DELETE FAVORITE PACKAGE
#---------------------------------------------------------------------------------------------------

@api.route('/favorites/packages/<int:packages_id>', methods=['DELETE'])
def delete_fav_package(packages_id):
    user_id = 1
    user = User.query.get(user_id)
    package = Packages.query.get(packages_id)
    favList = User.query.filter_by(id=user_id).first().favPackages
    favList.remove(package)
    db.session.commit()

    return jsonify({
        "FavPackages": list(map(lambda x : x.serialize(), favList))
    }), 200

#---------------------------------------------------------------------------------------------------
#                       GET PACKAGE data
#---------------------------------------------------------------------------------------------------

@api.route('/packages', methods=['GET'])
def handle_packages():

    get_packages = Packages.query.all()
    all_packages = list(map(lambda x: x.serialize(), get_packages))

    return jsonify(all_packages), 200

#---------------------------------------------------------------------------------------------------
#                       POST PACKAGE data
#---------------------------------------------------------------------------------------------------

@api.route('/packages', methods=['POST'])
def create_package():

    request_body_package = request.get_json()
    
    package1 = Packages(
        package_name=request_body_package["package_name"],
        title=request_body_package["title"],
        description=request_body_package["description"],
        tour_duration=request_body_package["tour_duration"],
        destinations=request_body_package["destinations"],
        activities=request_body_package["activities"],
        transport=request_body_package["transport"],
        lodging=request_body_package["lodging"],
        overview_title=request_body_package["overview_title"],
        overview_acomodation=request_body_package["overview_acomodation"],
        overview_description=request_body_package["overview_description"],

        )
    db.session.add(package1)
    db.session.commit()

    return jsonify(request_body_package), 200

#---------------------------------------------------------------------------------------------------
#                       PUT edit PACKAGE data
#---------------------------------------------------------------------------------------------------

@api.route('/packages/<int:packages_id>', methods=['PUT'])
def edit_package(packages_id):

    request_body_package = request.get_json()
    
    package1 = Packages.query.get(packages_id)
    if package1 is None:
        raise APIException("Package not found", status_code=404)

    if "package_name" in request_body_package:
        package1.name = request_body_package["package_name"]

    db.session.commit()

    return jsonify(request_body_package), 200

#---------------------------------------------------------------------------------------------------
#                       DELETE PACKAGE 
#---------------------------------------------------------------------------------------------------

@api.route('/packages/<int:packages_id>', methods=['DELETE'])
def delete_package(packages_id):
    
    package1 = Packages.query.get(packages_id)
    if package1 is None:
        raise APIException("Package not found", status_code=404)
    db.session.delete(package1)
    db.session.commit()

    return jsonify("ok"), 200

#---------------------------------------------------------------------------------------------------
#                       GET PACKAGE DETAILS 
#---------------------------------------------------------------------------------------------------

@api.route('/packages/<int:packages_id>', methods=['GET'])
def handle_packages_details(packages_id):
    package_detail = Packages.query.get(packages_id)
    all_details = package_detail.serialize()

    return jsonify(all_details), 200


#---------------------------------------------------------------------------------------------------
#               EXAMPLE ROUTE
#---------------------------------------------------------------------------------------------------

# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200