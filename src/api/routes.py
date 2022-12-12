"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

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
    people_query = User.query.all()
    all_people = list(map(lambda x: x.serialize(), people_query))
    return jsonify({
        "result": all_people
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
#               EXAMPLE ROUTE
#---------------------------------------------------------------------------------------------------

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200