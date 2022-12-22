"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Packages, Favorites, Review, Shopping, OrderHistory
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
#                           PRIVATED JWT GET
#---------------------------------------------------------------------------------------------------

@api.route("/private", methods=["GET"])
@jwt_required()
def protected():

    # Access to user_id with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(email=current_user_id).first()
    return jsonify(user.serialize()), 200
    # user = User.query.get(current_user_id)
    
    # return jsonify({"id": user.id, "email": user.email }), 200
#===================================================================================================
#================================ USERS queries ================================================
#---------------------------------------------------------------------------------------------------
#                                 GET USERS  
#----------------------------------------------- ----------------------------------------------------

@api.route('/users', methods=['GET'])
def handle_users():
    # get all the people
    get_users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), get_users))

    return jsonify(all_users), 200
    # return jsonify({
    #     "result": all_users
    # }), 200

#---------------------------------------------------------------------------------------------------
#                                USERS DELETE
#---------------------------------------------------------------------------------------------------

@api.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    
    user1 = User.query.filter_by(id=user_id).first()
    if user1 is None:
        return jsonify({"msg" : 'User not found'}, 404)

    elif user1:
        db.session.delete(user1)
        db.session.commit()

        return jsonify({"msg": "User deleted successfully"}), 200

#---------------------------------------------------------------------------------------------------
#                                 USERS PUT Edit ROUTE
#---------------------------------------------------------------------------------------------------

@api.route('/users/<int:user_id>', methods=['PUT'])
def edit_user(user_id):

    request_body_user = json.loads(request.data)
    user1 = User.query.filter_by(id=user_id).first()
    if user1 is None:
        return jsonify({"msg": "User doesn't exist"}), 404

    if "username" in request_body_user:
        user1.username = request_body_user["username"]

    db.session.commit()

    return jsonify(request_body_user), 200

#===================================================================================================
#================================ FAVORITES queries ================================================
#---------------------------------------------------------------------------------------------------
#               GET ALL FAVORITES
#---------------------------------------------------------------------------------------------------

@api.route('/favorites', methods=['GET'])
def get_favorites():
   
    favorites = Favorites.query.all()
    print(favorites)
    results = list(map(lambda x: x.serialize(), favorites))
    print(results)
    return jsonify(results), 200

#---------------------------------------------------------------------------------------------------
#               GET USER FAVORITES
#---------------------------------------------------------------------------------------------------

@api.route('/user/<int:id_user>/favorites', methods=['GET'])
def get_favorites_by_user(id_user):
   
    favorites = Favorites.query.filter_by(id_user=id_user).all()
    print(favorites)
    results = list(map(lambda x: x.serialize2(), favorites))

    if (results == []):
      return  jsonify({"msg": "You don't have favorites"}), 404
    print(results)
    return jsonify({"user_id": favorites[0].id_user, "results": results}), 200

#---------------------------------------------------------------------------------------------------
#                FAVORITES POST
#---------------------------------------------------------------------------------------------------

@api.route('/favorites', methods=['POST'])
def create_favorites():
    
    request_body_favorites = json.loads(request.data)
    print(request_body_favorites)
    user = request.json['id_user']
    package = request.json['id_packages']
    print(user, package)
    user_query = User.query.filter_by(id=request_body_favorites["id_user"]).first()
    
    print(user_query)
    if user_query:
        package_query = Favorites.query.filter_by(id_user=request_body_favorites["id_user"]).filter_by(id_packages=request_body_favorites["id_packages"]).first()
        if package_query:
            print(package_query)
            return jsonify({"msg": "Package exists in the list"}), 404
        else:    
            new_favorites = Favorites(
            id_user=request_body_favorites["id_user"],
            id_packages=request_body_favorites["id_packages"])
            # Flask command to add a new entry
            db.session.add(new_favorites)
            # Flask command to commit the database, saving the changes
            db.session.commit()
            # Standard response to request with error code 200 (success)
            return jsonify({"msg": "New favorite list created"}), 200

    return jsonify({"msg":"User is not logged in"}), 400

#---------------------------------------------------------------------------------------------------
#               POST FAVORITE PACKAGE
#---------------------------------------------------------------------------------------------------

# @api.route('/favorites/packages/<int:packages_id>', methods=['POST'])
# def create_fav_package(packages_id):
#     user_id = 1
#     user = User.query.get(user_id)
#     package = Packages.query.get(packages_id)
#     favList = User.query.filter_by(id=user_id).first().favPackages
#     favList.append(package)
#     db.session.commit()

#     return jsonify({
#         "FavPackages": list(map(lambda x : x.serialize(), favList))
#     }), 200

#---------------------------------------------------------------------------------------------------
#                       DELETE FAVORITE PACKAGE
#---------------------------------------------------------------------------------------------------

@api.route('/favorites', methods=['DELETE'])
def delete_favorites():
   
    request_body_favorites = json.loads(request.data)
    print(request_body_favorites)
    # user_query = User.query.filter_by(id_user=request_body_favorites["id_user"]).first()
    # packages_query = Packages.query.filter_by(id_packages=request_body_favorites["id_packages"]).first()

    user = request.json['id_user']
    package = request.json['id_packages']
    print(user, package)
    # favorite_query = Favorites.query.filter_by(id=request_body_favorites["id"]).first()
    user_query = User.query.filter_by(id=request_body_favorites["id_user"]).first()
    
    print(user_query)
    if user_query:
        package_query = Favorites.query.filter_by(id_user=request_body_favorites["id_user"]).filter_by(id_packages=request_body_favorites["id_packages"]).first()
        if package_query:
            
            db.session.delete(package_query)
            db.session.commit()
            return jsonify({"msg": "Favorite deleted successfully"}), 200

        elif package is None:
            return jsonify(({"msg":'Package not found'}), 404) 

#===================================================================================================
#================================ Packages queries ================================================
#---------------------------------------------------------------------------------------------------
#                       GET ALL PACKAGES 
#---------------------------------------------------------------------------------------------------

@api.route('/packages', methods=['GET'])
def handle_packages():

    get_packages = Packages.query.all()
    all_packages = list(map(lambda x: x.serialize(), get_packages))

    return jsonify(all_packages), 200

#---------------------------------------------------------------------------------------------------
#                       GET PACKAGE DETAILS 
#---------------------------------------------------------------------------------------------------

@api.route('/packages/<int:packages_id>', methods=['GET'])
def handle_packages_details(packages_id):
    package_detail = Packages.query.filter_by(id=packages_id).first()
    all_details = package_detail.serialize()

    return jsonify(all_details), 200
#---------------------------------------------------------------------------------------------------
#                       POST PACKAGE data
#---------------------------------------------------------------------------------------------------

@api.route('/packages', methods=['POST'])
def create_package():
    request_body_package = json.loads(request.data)
    print(body)
    new_package = Packages(
    package_name=request_body_package["package_name"],
    category=request_body_package["category"],
    description=request_body_package["description"],
    # url=request_body_package["url"],
    title=request_body_package["title"],
    price=int(request_body_package["price"]),
    tour_duration=request_body_package["tour_duration"],
    destinations=request_body_package["destinations"],
    activities=request_body_package["activities"],
    transport=request_body_package["transport"],
    lodging=request_body_package["lodging"],
    overview_title=request_body_package["overview_title"],
    overview_acomodation=request_body_package["overview_acomodation"],
    overview_description=request_body_package["overview_description"],
    )
    print(new_package)
    db.session.add(new_package)
    db.session.commit()

    return jsonify({"msg" : "New Package created"}), 200

#---------------------------------------------------------------------------------------------------
#                       PUT edit PACKAGE data
#---------------------------------------------------------------------------------------------------

@api.route('/packages/<int:packages_id>', methods=['PUT'])
def edit_package(packages_id):

    request_body_package = json.loads(request.data)
    
    package1 = Packages.query.filter_by(id=packages_id).first()
    if package1 is None:
        return json({"msg": "Package not found"}), 404

    if "package_name" in request_body_package:
        package1.package_name = request_body_package["package_name"]

    if "category" in request_body_package:
        package1.category = request_body_package["category"]

    if "description" in request_body_package:
        package1.description = request_body_package["description"]

    if "url" in request_body_package:
        package1.url = request_body_package["url"]

    if "title" in request_body_package:
        package1.title = request_body_package["title"]

    if "price" in request_body_package:
        package1.price = int(request_body_package["price"])
    
    if "tour_duration" in request_body_package:
        package1.tour_duration = request_body_package["tour_duration"]

    if "destinations" in request_body_package:
        package1.destinations = request_body_package["destinations"]

    if "activities" in request_body_package:
        package1.activities = request_body_package["activities"]

    if "transport" in request_body_package:
        package1.transport = request_body_package["transport"]

    if "lodging" in request_body_package:
        package1.lodging = request_body_package["lodging"]  

    if "overview_title" in request_body_package:
        package1.overview_title = request_body_package["overview_title"]

    if "overview_acomodation" in request_body_package:
        package1.overview_acomodation = request_body_package["overview_acomodation"]

    if "overview_description" in request_body_package:
        package1.overview_description = request_body_package["overview_description"]

    db.session.commit()

    return jsonify({"msg":"Package updated successfully"}), 200

#---------------------------------------------------------------------------------------------------
#                       DELETE PACKAGE 
#---------------------------------------------------------------------------------------------------

@api.route('/packages/<int:packages_id>', methods=['DELETE'])
def delete_package(packages_id):
    
    package1 = Packages.query.filter_by(id=packages_id).first()
    if package1 is None:
        return jsonify({"msg": "Package not found"}), 404
    elif package1:
        db.session.delete(package1)
        db.session.commit()

        return jsonify({"msg": "Package deleted successfully"}), 200

#===================================================================================================
#================================ SHOPPING queries ================================================
#---------------------------------------------------------------------------------------------------
#                                  GET SHOPPING
#---------------------------------------------------------------------------------------------------

@api.route('/shopping', methods=['GET'])
def get_shopping():
   
    shopping = Shopping.query.all()
    print(shopping)
    results = list(map(lambda x: x.serialize(), shopping))
    print(results)
    return jsonify(results), 200

#---------------------------------------------------------------------------------------------------
#                                  GET USER SHOPPING LIST
#---------------------------------------------------------------------------------------------------

@api.route('/user/<int:id_user>/shopping', methods=['GET'])
def get_shopping_by_user(id_user):
    
    shopping = Shopping.query.filter_by(id_user=id_user).all()
    print(shopping)
    results = list(map(lambda x: x.serialize2(), shopping))

    if results == []:
      return  jsonify({"msg": "Your cart is empty"}), 404
    print(results)
    return jsonify({"user_id": shopping[0].id_user,"results": results}), 200

#---------------------------------------------------------------------------------------------------
#                                  POST SHOPPING
#---------------------------------------------------------------------------------------------------

@api.route('/shopping', methods=['POST'])
def create_shopping():
    
    request_body_shopping = json.loads(request.data)
    print(request_body_shopping)
    user_query = User.query.filter_by(id=request_body_shopping["id_user"]).first()
       
    print(user_query)
    if user_query: 
        new_shopping = Shopping(
        id_user=request_body_shopping["id_user"],
        id_packages=request_body_shopping["id_packages"])
        
        db.session.add(new_shopping)
        db.session.commit()
        
        return jsonify({"msg": "New shopping list created"}), 200

    return jsonify({"msg":"User is not logged in"}), 400

#---------------------------------------------------------------------------------------------------
#                                  DELETE SHOPPING
#---------------------------------------------------------------------------------------------------

@api.route('/shopping', methods=['DELETE'])
def delete_shopping():
    
    request_body_shopping = json.loads(request.data)
    print(request_body_shopping)
    user = request.json['id_user']
    package = request.json['id_packages']
    print(user, package)
    # favorite_query = Favorites.query.filter_by(id=body["id"]).first()
    user_query = User.query.filter_by(id=request_body_shopping["id_user"]).first()
    
    print(user_query)
    if user_query:
        package_query = Shopping.query.filter_by(id_user=request_body_shopping["id_user"]).filter_by(id_packages=request_body_shopping["id_packages"]).first()
        if package_query:
            
            db.session.delete(package_query)
            db.session.commit()
            return jsonify({"msg": "The package was deleted from your cart"}), 200
            
        elif package is None:
            return jsonify({"msg": "Package not found"}), 404

    return jsonify({"msg": "Something went wrong"}), 400

#===================================================================================================
#================================ ORDERS HISTORY queries ===========================================
#---------------------------------------------------------------------------------------------------
#                                  GET ALL ORDERS
#---------------------------------------------------------------------------------------------------

@api.route('/order', methods=['GET'])
def get_order():
  
    order = OrderHistory.query.all()
    print(order)
    results = list(map(lambda x: x.serialize(), order))
    print(results)
    return jsonify(results), 200

#---------------------------------------------------------------------------------------------------
#                                  GET USER ORDERS
#---------------------------------------------------------------------------------------------------

@api.route('/user/<int:id_user>/order', methods=['GET'])
def get_order_by_user(id_user):
   
    order = OrderHistory.query.filter_by(id_user=id_user).all()
    print(order)
    results = list(map(lambda x: x.serialize2(), order))

    if results == []:
      return  jsonify({"msg": "Your cart is empty"}), 404
    print(results)
    return jsonify({"id": order[0].id,"results": results}), 200

#---------------------------------------------------------------------------------------------------
#                                 ORDERS POST
#---------------------------------------------------------------------------------------------------

@api.route('/order', methods=['POST'])
def create_order():
    
    request_body_order = json.loads(request.data)
    print(request_body_order)
    new_order= OrderHistory(
    id_shopping=request_body_order["id_shopping"],
    id_user=request_body_order["id_user"])
    
    db.session.add(new_order)
    db.session.commit()
    
    return jsonify({"msg": "New order created"}), 200

#---------------------------------------------------------------------------------------------------
#                                  ORDERS DELETE
#---------------------------------------------------------------------------------------------------

@api.route('/order', methods=['DELETE'])
def delete_order():
   
    request_body_order = json.loads(request.data)
    print(request_body_order)
    user = request.json['id_user']
    package = request.json['id_shopping']
    print(user, package)
    # favorite_query = Favorites.query.filter_by(id=request_body_order["id"]).first()
    user_query = User.query.filter_by(id=request_body_order["id_user"]).first()
    
    print(user_query)
    if user_query:
        package_query = OrderHistory.query.filter_by(id_user=request_body_order["id_user"]).filter_by(id_shopping=request_body_order["id_shopping"]).first()
        if package_query:
            
            db.session.delete(package_query)
            db.session.commit()
            return jsonify({"msg": "The package was deleted from your cart"}), 200
            
        elif package is None:
            return jsonify({"msg": "Package not found"}), 404

    return jsonify({"msg": "Something went wrong"}), 400

#===================================================================================================
#======================================== REVIEW queries ===========================================    
#---------------------------------------------------------------------------------------------------
#                                           GET ALL REVIEWS
#---------------------------------------------------------------------------------------------------

@api.route('/reviews', methods=['GET'])
def get_reviews():
    
    reviews = Review.query.all()
    print(reviews)
    results = list(map(lambda x: x.serialize(), reviews))
    print(results)
    return jsonify(results), 200

#---------------------------------------------------------------------------------------------------
#                                  GET USER REVIEWS
#---------------------------------------------------------------------------------------------------

@api.route('/user/<int:id_user>/reviews', methods=['GET'])
def get_reviews_by_user(id_user):
    
    reviews = Review.query.filter_by(id_user=id_user).all()
    print(reviews)
    results = list(map(lambda x: x.serialize(), reviews))

    if (results == []):
      return  jsonify({"msg": "User doesn't have any reviews yet"}), 404

    print(results)
    return jsonify({"results": results}), 200
#---------------------------------------------------------------------------------------------------
#                                  GET PACKAGES REVIEWS
#---------------------------------------------------------------------------------------------------

@api.route('/packages/<int:packages_id>/reviews', methods=['GET'])
def get_reviews_per_package(packages_id):
   
    reviews = Review.query.filter_by(id_packages=packages_id).all()
    print(reviews)
    results = list(map(lambda x: x.serialize(), reviews))
    print(results)
    return jsonify(results), 200
#---------------------------------------------------------------------------------------------------
#                                  REVIEW POST
#---------------------------------------------------------------------------------------------------

@api.route('/review', methods=['POST'])
def create_review():
   
    request_body_review = json.loads(request.data)
    print(request_body_review)
    user_query = User.query.filter_by(id=request_body_review["id_user"]).first()
    print(user_query)
    if user_query: 
        new_review = Review(
        comment=request_body_review["comment"],
        score=request_body_review["score"],
        id_user=request_body_review["id_user"],
        id_packages=request_body_review["id_packages"])
        
        db.session.add(new_review)
        
        db.session.commit()
        
        return jsonify({"msg": "New review created for this package"}), 200
    if user_query is None:
        return jsonify({"msg": "User doesn't exist"}), 404
    
    return jsonify({"msg": "Something went wrong"}), 400

#---------------------------------------------------------------------------------------------------
#                                  REVIEW DELETE
#---------------------------------------------------------------------------------------------------

@api.route('/reviews/<int:id_user>/<int:id_review>', methods=['DELETE'])
def delete_review(id_user, id_review):
    
    review_query= Review.query.filter_by(id_user=id_user).filter_by(id=id_review).first()
    print(review_query)
    if review_query:
        db.session.delete(review_query)
        db.session.commit()
        return jsonify({"msg": "Review deleted successfully"}), 200
            
    elif review_query is None:
        return jsonify({"msg": "Review not found"}), 404

    return jsonify({"msg": "Something went wrong"}), 400

#---------------------------------------------------------------------------------------------------
#               EXAMPLE ROUTE
#---------------------------------------------------------------------------------------------------

# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200