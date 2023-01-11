"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User, Packages, Favorites
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

api = Blueprint('api', __name__)

#---------------------------------------------------------------------------------------------------
#              EXAMPLE HELLO ROUTE
#---------------------------------------------------------------------------------------------------

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#---------------------------------------------------------------------------------------------------
#             LOGIN ROUTE POST
#---------------------------------------------------------------------------------------------------

@api.route("/login", methods=["POST"])
def login():
    # Get input
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query to get user info
    user = User.query.filter_by(email=email).first()
    ## If "user" query brings no data, then user doesn't exist
    if user is None:
        return jsonify({"msg":"User doesn't exist"}), 404

    encrypted_pass = current_app.bcrypt.check_password_hash(user.password, password)

    # Compared email and password, if one of them is not correct then it rejects the login attempt
    if email != user.email or not encrypted_pass:
        return jsonify({"msg": "Bad email or password"}), 401
    # Grants a token if login was successful
    else:
        access_token = create_access_token(identity=email)
            # Shows the token and the user info
        return jsonify({"msg": access_token,"user": user.serialize()}), 200

#---------------------------------------------------------------------------------------------------
#              PROFILE ROUTE GET
#---------------------------------------------------------------------------------------------------

@api.route("/profile", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    # Same as login, if the query brings nothing then it doesn't exist
    if user is None:
        return jsonify({"msg":"User doesn't exist"}), 404
    # If user is correct then it shows the user's info
    return jsonify({"user": user.serialize()}), 200



#---------------------------------------------------------------------------------------------------
#              LOGOUT ROUTE GET
#---------------------------------------------------------------------------------------------------

@api.route("/valid-token", methods=["GET"])
@jwt_required()
def valid_token():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    # Same as login, if the query brings nothing then it doesn't exist

    if current_user is None:
        return jsonify({"User not logged in"}), 422

    elif user is None:
        return jsonify({"status":False}), 404
    # If user is correct then it shows the user's info
    return jsonify({"status": True,"user": user.serialize()  }), 200

#===================================================================================================
#================================ PACKAGES ROUTES ================================================
#---------------------------------------------------------------------------------------------------
#                       GET ALL PACKAGES 
#---------------------------------------------------------------------------------------------------

@api.route('/package', methods=['GET'])
def get_packages():

    packages = Packages.query.all()
    print(packages)
    results = list(map(lambda x: x.serialize(), packages))
    return jsonify(results), 200

#---------------------------------------------------------------------------------------------------
#                       GET PACKAGE DETAILS 
#---------------------------------------------------------------------------------------------------

@api.route('/package/<int:package_id>', methods=['GET'])
def get_package(package_id):
   
    package = Packages.query.filter_by(id=package_id).first()
    print(package)
    results = package.serialize()
    return jsonify(results), 200

#---------------------------------------------------------------------------------------------------
#                       POST PACKAGE 
#---------------------------------------------------------------------------------------------------

@api.route('/package', methods=['POST'])
def create_package():
    
    body = json.loads(request.data)
    print(body)
    new_package = Packages(
    name=body["name"],
    category=body["category"],
    description=body["description"],
    title=body["title"],
    tour_duration=body["tour_duration"],
    destinations=body["destinations"],
    activities=body["activities"],
    transport=body["transport"],
    lodging=body["lodging"],
    overview_title=body["overview_title"],
    overview_acomodation=body["overview_acomodation"],
    overview_description=body["overview_description"],
    overview_title1=body["overview_title1"],
    overview_acomodation1=body["overview_acomodation1"],
    overview_description1=body["overview_description1"],
    overview_title2=body["overview_title2"],
    overview_acomodation2=body["overview_acomodation2"],
    overview_description2=body["overview_description2"],
    overview_title3=body["overview_title3"],
    overview_acomodation3=body["overview_acomodation3"],
    overview_description3=body["overview_description3"],
    overview_title4=body["overview_title4"],
    overview_acomodation4=body["overview_acomodation4"],
    overview_description4=body["overview_description4"],
    overview_title5=body["overview_title5"],
    overview_acomodation5=body["overview_acomodation5"],
    overview_description5=body["overview_description5"],
    overview_title6=body["overview_title6"],
    overview_acomodation6=body["overview_acomodation6"],
    overview_description6=body["overview_description6"],
    overview_title7=body["overview_title7"],
    overview_acomodation7=body["overview_acomodation7"],
    overview_description7=body["overview_description7"],
    overview_title8=body["overview_title8"],
    overview_acomodation8=body["overview_acomodation8"],
    overview_description8=body["overview_description8"],
    overview_title9=body["overview_title9"],
    overview_acomodation9=body["overview_acomodation9"],
    overview_description9=body["overview_description9"],
    overview_title10=body["overview_title10"],
    overview_acomodation10=body["overview_acomodation10"],
    overview_description10=body["overview_description10"],
    overview_title11=body["overview_title11"],
    overview_acomodation11=body["overview_acomodation11"],
    overview_description11=body["overview_description11"],
    overview_title12=body["overview_title12"],
    overview_acomodation12=body["overview_acomodation12"],
    overview_description12=body["overview_description12"],
    overview_title13=body["overview_title13"],
    overview_acomodation13=body["overview_acomodation13"],
    overview_description13=body["overview_description13"],
    overview_title14=body["overview_title14"],
    overview_acomodation14=body["overview_acomodation14"],
    overview_description14=body["overview_description14"],
    overview_title15=body["overview_title15"],
    overview_acomodation15=body["overview_acomodation15"],
    overview_description15=body["overview_description15"],
    url=body["url"],
    url1=body["url1"],
    url2=body["url2"],
    url3=body["url3"],
    url4=body["url4"],
    url5=body["url5"],
    url6=body["url6"],
    url7=body["url7"],
    url8=body["url8"],
    url9=body["url9"],
    url10=body["url10"],
    url11=body["url11"],
    url12=body["url12"],
    url13=body["url13"],
    url14=body["url14"],
    url15=body["url15"],
    )
    print(new_package)
    # Flask command to add a new entry
    db.session.add(new_package)
    # Flask command to commit the database, saving the changes
    db.session.commit()
    # Standard response to request with error code 200 (success)
    return jsonify({"msg": "New package created"}), 200

#---------------------------------------------------------------------------------------------------
#                       DELETE PACKAGE  
#---------------------------------------------------------------------------------------------------    

@api.route('/package/<int:package_id>', methods=["DELETE"])
def delete_package(package_id):

    package = Packages.query.filter_by(id=package_id).first()
    print(package)
    if package is None:
        return jsonify({"msg": "Package not found"}), 404
    # If user exists, deletes it
    elif package:
        db.session.delete(package)
        db.session.commit()
        return jsonify({"msg": "Package deleted successfully"}), 200

#---------------------------------------------------------------------------------------------------
#                       PUT EDIT PACKAGE 
#---------------------------------------------------------------------------------------------------

@api.route('/package/<int:package_id>', methods=['PUT'])
def modify_package(package_id):

    body = json.loads(request.data)
    package = Packages.query.filter_by(id=package_id).first()
    # If package exists, modifies it with new inputs
    if package is None:
        return json({"msg": "Package not found"}), 404
    
    if "name" in body:
        package.name = body["name"]
    if "category" in body:
        package.category = body["category"]
    if "description" in body:
        package.description = body["description"]
    if "title" in body:
        package.title = body["title"]
    if "tour_duration" in body:
        package.tour_duration = body["tour_duration"]
    if "destinations" in body:
        package.destinations = body["destinations"]
    if "activities" in body:
        package.activities = body["activities"]
    if "transport" in body:
        package.transport = body["transport"]
    if "lodging" in body:
        package.lodging = body["lodging"]
    if "overview_title" in body:
        package.overview_title = body["overview_title"]
    if "overview_acomodation" in body:
        package.overview_acomodation = body["overview_acomodation"]
    if "overview_description" in body:
        package.overview_description = body["overview_description"]
    if "overview_title1" in body:
        package.overview_title1 = body["overview_title1"]
    if "overview_acomodation1" in body:
        package.overview_acomodation1 = body["overview_acomodation1"]
    if "overview_description1" in body:
        package.overview_description1 = body["overview_description1"]
    if "overview_title2" in body:
        package.overview_title2 = body["overview_title2"]
    if "overview_acomodation2" in body:
        package.overview_acomodation2 = body["overview_acomodation2"]
    if "overview_description2" in body:
        package.overview_description2 = body["overview_description2"]
    if "overview_title3" in body:
        package.overview_title3 = body["overview_title3"]
    if "overview_acomodation3" in body:
        package.overview_acomodation3 = body["overview_acomodation3"]
    if "overview_description3" in body:
        package.overview_description3 = body["overview_description3"]
    if "overview_title4" in body:
        package.overview_title4 = body["overview_title4"]
    if "overview_acomodation4" in body:
        package.overview_acomodation4 = body["overview_acomodation4"]
    if "overview_description4" in body:
        package.overview_description4 = body["overview_description4"]
    if "overview_title" in body:
        package.overview_title5 = body["overview_title5"]
    if "overview_acomodation5" in body:
        package.overview_acomodation5 = body["overview_acomodation5"]
    if "overview_description5" in body:
        package.overview_description5 = body["overview_description5"]
    if "overview_title6" in body:
        package.overview_title6 = body["overview_title6"]
    if "overview_acomodation6" in body:
        package.overview_acomodation6 = body["overview_acomodation6"]
    if "overview_description6" in body:
        package.overview_description6 = body["overview_description6"]
    if "overview_title7" in body:
        package.overview_title7 = body["overview_title7"]
    if "overview_acomodation7" in body:
        package.overview_acomodation7 = body["overview_acomodation7"]
    if "overview_description7" in body:
        package.overview_description7 = body["overview_description7"]
    if "overview_title8" in body:
        package.overview_title8 = body["overview_title8"]
    if "overview_acomodation8" in body:
        package.overview_acomodation8 = body["overview_acomodation8"]
    if "overview_description8" in body:
        package.overview_description8 = body["overview_description8"]
    if "overview_title9" in body:
        package.overview_title9 = body["overview_title9"]
    if "overview_acomodation9" in body:
        package.overview_acomodation9 = body["overview_acomodation9"]
    if "overview_description9" in body:
        package.overview_description9 = body["overview_description9"]
    if "overview_title10" in body:
        package.overview_title10 = body["overview_title10"]
    if "overview_acomodation10" in body:
        package.overview_acomodation10 = body["overview_acomodation10"]
    if "overview_description10" in body:
        package.overview_description10 = body["overview_description10"]
    if "overview_title11" in body:
        package.overview_title11 = body["overview_title11"]
    if "overview_acomodation11" in body:
        package.overview_acomodation11 = body["overview_acomodation11"]
    if "overview_description11" in body:
        package.overview_description11 = body["overview_description11"]
    if "overview_title12" in body:
        package.overview_title12 = body["overview_title12"]
    if "overview_acomodation12" in body:
        package.overview_acomodation12 = body["overview_acomodation12"]
    if "overview_description12" in body:
        package.overview_description12 = body["overview_description12"]
    if "overview_title13" in body:
        package.overview_title13 = body["overview_title13"]
    if "overview_acomodation13" in body:
        package.overview_acomodation13 = body["overview_acomodation13"]
    if "overview_description13" in body:
        package.overview_description13 = body["overview_description13"]
    if "overview_title14" in body:
        package.overview_title14 = body["overview_title14"]
    if "overview_acomodation14" in body:
        package.overview_acomodation14 = body["overview_acomodation14"]
    if "overview_description14" in body:
        package.overview_description14 = body["overview_description14"]
    if "overview_title15" in body:
        package.overview_title15 = body["overview_title15"]
    if "overview_acomodation15" in body:
        package.overview_acomodation15 = body["overview_acomodation15"]
    if "overview_description15" in body:
        package.overview_description15 = body["overview_description15"]
    if "url" in body:
        package.url = body["url"]
    if "url1" in body:
        package.url1 = body["url1"]
    if "url2" in body:
        package.url2 = body["url2"]
    if "url3" in body:
        package.url3 = body["url3"]
    if "url4" in body:
        package.url4 = body["url4"]
    if "url5" in body:
        package.url5 = body["url5"]
    if "url6" in body:
        package.url6 = body["url6"]
    if "url7" in body:
        package.url7 = body["url7"]
    if "url8" in body:
        package.url8 = body["url8"]
    if "url9" in body:
        package.url9 = body["url9"]
    if "url10" in body:
        package.url10 = body["url10"]
    if "url11" in body:
        package.url11 = body["url11"]
    if "url12" in body:
        package.url12 = body["url12"]
    if "url13" in body:
        package.url13 = body["url13"]
    if "url14" in body:
        package.url14 = body["url14"]
    if "url15" in body:
        package.url15 = body["url15"]

    db.session.commit()
    return jsonify({"msg":"Package updated successfully"}), 200

#---------------------------------------------------------------------------------------------------
#                       POST  USER 
#---------------------------------------------------------------------------------------------------

@api.route('/user', methods=['POST'])
def create_user():
  
    body = json.loads(request.data)
    print(body)
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    # Filter by to check input email, this will be used in the if so email is never repeated
    user_query = User.query.filter_by(email=body["email"]).first()
    print(user_query)
    encrypted_pass = current_app.bcrypt.generate_password_hash(body["password"]).decode('utf-8')
    
    if username == "":
        return jsonify({"msg": "Invalid username"}), 406
    if email == "":
        return jsonify({"msg": "Email can't be empty"}), 406
    if password == "":
        return jsonify({"msg": "Password can't be empty"}), 406
    if user_query is None:
        # Table contents, same as the one in models.py
        new_user = User(
        username=body["username"],
        password=encrypted_pass,
        email=body["email"])
        print(new_user.serialize())
        # Flask command to add a new entry
        db.session.add(new_user)
        # Flask command to commit the database, saving the changes
        db.session.commit()
        # Standard response to request with error code 200 (success)
        return jsonify({"msg": "New user created"}), 200
    
    return jsonify({"msg": "User exists"}), 406
    
#===================================================================================================
#================================ USER ROUTES ================================================    
#---------------------------------------------------------------------------------------------------
#                       GET ALL USERS
#---------------------------------------------------------------------------------------------------

@api.route('/user', methods=['GET'])
def get_users():
   
    users = User.query.all()
    print(users)
    results = list(map(lambda x: x.serialize(), users))
    return jsonify(results), 200

#---------------------------------------------------------------------------------------------------
#                       GET USER DETAILS
#---------------------------------------------------------------------------------------------------

@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
   
    user = User.query.filter_by(id=user_id).first()
    print(user)
    results = user.serialize()
    return jsonify(results), 200

#---------------------------------------------------------------------------------------------------
#                       DELETE USER
#---------------------------------------------------------------------------------------------------

@api.route('/user/<int:user_id>', methods=["DELETE"])
def delete_user(user_id):

    user = User.query.filter_by(id=user_id).first()
    print(user)
    # If user exists, deletes it
    if user is None:
        return jsonify({"msg" : 'User not found'}, 404)
    elif user:
        db.session.delete(user)
        db.session.commit()
        return jsonify({"msg": "User deleted successfully"}), 200

#---------------------------------------------------------------------------------------------------
#                       PUT EDIT USER
#---------------------------------------------------------------------------------------------------

@api.route('/user/<int:user_id>', methods=['PUT'])
# @jwt_required()
def modify_user(user_id):
    body = json.loads(request.data)
    user = User.query.filter_by(id=user_id).first()
    if user is None:
        return jsonify({"msg": "User doesn't exist"}), 404

    if "email" in body:
        email_exists = User.query.filter_by(email=body["email"]).all()
        if email_exists:
            return jsonify({"msg": "Email already taken"}), 409 
        else:
            user.email = body["email"] 

    if "username" in body:
        username_exists = User.query.filter_by(username=body["username"]).all()
        if username_exists:
            return jsonify({"msg": "Username already taken"}), 409
        else:
            user.username = body["username"]

    print(user.serialize())
    # If user exists, modifies it with new inputs
    
    # if "username" in body:
    #     user.username = body["username"]
    # if "email" in body:
    #     user.email = body["email"] 
    if "password" in body:
        encrypted_pass = current_app.bcrypt.generate_password_hash(body["password"]).decode('utf-8')
        user.password = encrypted_pass   
    if "name" in body:
        user.name = body["name"]   
    if "lastname" in body:
        user.lastname = body["lastname"]
    if "country" in body:
        user.country = body["country"]
    if "user_url" in body:
        user.user_url = body["user_url"]   
    if "premium" in body:
        user.premium = body["premium"]   
    if "admin" in body:
        user.admin = body["admin"]   
    db.session.commit()
    return jsonify({"msg": "User updated successfully"}), 200

#---------------------------------------------------------------------------------------------------
#                           MODIFY USER PASSWORD
#---------------------------------------------------------------------------------------------------

@api.route('/user/password', methods=['POST'])
def modify_user_password():
    recover_email = request.json['email']
    #Random password
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) 
    # If there's no input
    if not recover_email:
        return jsonify({"msg": "You must type an email address"}), 401
    user = User.query.filter_by(email=recover_email).first()
    print(user)
    # If user email doesn't exist
    if user is None:
        return jsonify({"msg": "User email doesn't exist"}), 404
    # Modifies user passowrd with new random password
    user.password = recover_password
    db.session.commit()
    msg = Message("Hello", recipients=[recover_email])
    msg.html = f"""<h1>Your new password is: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify("Your password has been sent to your email"), 200

#===================================================================================================
#================================ FAVORITES ROUTES ================================================
#---------------------------------------------------------------------------------------------------
#                       GET ALL FAVORITES
#---------------------------------------------------------------------------------------------------

@api.route('/favorites', methods=['GET'])
def get_favorites():
   
    favorites = Favorites.query.all()
    print(favorites)
    results = list(map(lambda x: x.serialize(), favorites))
    print(results)
    return jsonify(results), 200

#---------------------------------------------------------------------------------------------------
#                       GET USER FAVORITES
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
#                       POST FAVORITES
#---------------------------------------------------------------------------------------------------

@api.route('/favorites', methods=['POST'])
def create_favorites():
    
    body = json.loads(request.data)
    print(body)
    user = request.json['id_user']
    package = request.json['id_packages']
    print(user, package)
    user_query = User.query.filter_by(id=body["id_user"]).first()
    
    print(user_query)
    if user_query:
        package_query = Favorites.query.filter_by(id_user=body["id_user"]).filter_by(id_packages=body["id_packages"]).first()
        if package_query:
            print(package_query)
            return jsonify({"msg": "Package exists in that list"}), 404
        else:    
            new_favorites = Favorites(
            id_user=body["id_user"],
            id_packages=body["id_packages"])
            # Flask command to add a new entry
            db.session.add(new_favorites)
            # Flask command to commit the database, saving the changes
            db.session.commit()
            # Standard response to request with error code 200 (success)
            return jsonify({"msg": "New favorite list created"}), 200

    return jsonify({"msg":"User is not logged in"}), 400

#---------------------------------------------------------------------------------------------------
#                       DELETE FAVORITES
#---------------------------------------------------------------------------------------------------

@api.route('/favorites', methods=['DELETE'])
def delete_favorites():
    
    body = json.loads(request.data)
    print(body)
    
    user = request.json['id_user']
    package = request.json['id_packages']
    print(user, package)
    
    user_query = User.query.filter_by(id=body["id_user"]).first()
    
    print(user_query)
    if user_query:
        package_query = Favorites.query.filter_by(id_user=body["id_user"]).filter_by(id_packages=body["id_packages"]).first()
        if package_query:
            
            db.session.delete(package_query)
            db.session.commit()
            return jsonify({"msg": "Favorite deleted successfully"}), 200

        elif package is None:
            return jsonify(({"msg":'Package not found'}), 404)   