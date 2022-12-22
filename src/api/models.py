from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

##-----------------------------------------USER TABLE--------------------------------------------------------------------

class User(db.Model):
    __tablename__="user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=True)
    email = db.Column(db.String(320), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=True)
    last_name = db.Column(db.String(120), unique=False, nullable=True)
    country = db.Column(db.String(120), unique=False, nullable=True)
    premium_user = db.Column(db.Boolean, unique=False, default=False)
    admin = db.Column(db.Boolean, unique=False, default=False)
    favorites = db.relationship('Favorites', backref='user', cascade="all, delete-orphan", lazy=True)
    reviews = db.relationship('Review', backref='user', cascade="all, delete-orphan", lazy=True)
    shopping = db.relationship('Shopping', backref='user', cascade="all, delete-orphan", lazy=True)
    orders = db.relationship('OrderHistory', backref='user', cascade="all, delete-orphan", lazy=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True, default=True)
    

    def __repr__(self):
        return f'<User {self.email}>'
        #  return '<User %r>' % self.username


    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,            
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "country": self.country,
            "premium_user": self.premium_user,
            "admin": self.admin,
            # do not serialize the password, its a security breach
        }

##---------------------------------------PACKAGES TABLE----------------------------------------------------------------

class Packages(db.Model):
    __tablename__= 'packages'
    id = db.Column(db.Integer, primary_key=True)
    package_name = db.Column(db.String(120), unique=False, nullable=True)
    category = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(50), unique=False, nullable=True)
    # url = db.Column(db.String(250), nullable=True)
    title = db.Column(db.String(120), unique=False, nullable=True)
    price = db.Column(db.Integer, nullable=True)
    tour_duration = db.Column(db.String(120), unique=False, nullable=True)
    destinations = db.Column(db.String(120), unique=False, nullable=True)
    activities = db.Column(db.String(120), unique=False, nullable=True)
    transport = db.Column(db.String(120), unique=False, nullable=True)
    lodging = db.Column(db.String(120), unique=False, nullable=True)
    overview_title = db.Column(db.String(120), unique=False, nullable=True)
    overview_acomodation = db.Column(db.String(120), unique=False, nullable=True)
    overview_description = db.Column(db.String(999), unique=False, nullable=True)
    shopping = db.relationship('Shopping', backref='packages', cascade="all, delete-orphan", lazy=True)
    favorite = db.relationship('Favorites', backref='packages', cascade="all, delete-orphan", lazy=True)
    reviews = db.relationship('Review', backref='packages', cascade="all, delete-orphan", lazy=True)

    def __repr__(self):
        return f'<Packages {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "package_name": self.package_name,
            "category": self.category,
            "description": self.description,
            # "url": self.url,
            "title":self.title,
            "price": self.price,
            "tour_duration": self.tour_duration,
            "destinations": self.destinations,
            "activities": self.activities,
            "transport": self.transport,
            "lodging": self.lodging,
            "overview_title": self.overview_title,
            "overview_acomodation": self.overview_acomodation,
            "overview_description": self.overview_description,
            # "score": self.serialize_score_average()
        }

    # def serialize_score_average(self):
    #     arr_score=list(map(lambda item: item.score, self.reviews))
    #     if len(arr_score) != 0 :
    #         avg_score = int(sum(arr_score)/len(arr_score))

    #         return avg_score
    #     else:
    #         avg_score = 0

    #         return avg_score

##---------------------------------------FAVORITES TABLE----------------------------------------------------------------

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer,  db.ForeignKey('user.id'), nullable=False )
    id_packages = db.Column(db.Integer, db.ForeignKey('packages.id') , nullable=True)

    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            # "id": self.id,
            "id_user": self.id_user,
            "id_packages": self.id_packages
        }

    def serialize2(self):
        package = Packages.query.filter_by(id=self.id_packages).first()
        return package.serialize()

##---------------------------------------REVIEW TABLE----------------------------------------------------------------

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(250))
    # date = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    id_user = db.Column(db.Integer,  db.ForeignKey('user.id'), nullable=False )
    id_packages = db.Column(db.Integer, db.ForeignKey('packages.id') , nullable=True)
    # score = db.Column(db.Integer, nullable=True)
    

    def __repr__(self):
        return f'<Review {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "date": self.date,
            "id_user": self.id_user,
            "id_packages": self.id_packages,
            
            # "score": self.score
        }
        
    def serialize2(self):
        package = Packages.query.filter_by(id=self.id_packages).first()
        return package.serialize()

##---------------------------------------SHOPPING TABLE----------------------------------------------------------------

class Shopping(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer,  db.ForeignKey('user.id'), nullable=False )
    id_packages = db.Column(db.Integer,  db.ForeignKey('packages.id'), nullable=False )

    def __repr__(self):
        return f'<Shopping {self.id}>'

    def serialize(self):
        return {
            # "id": self.id,
            "id_user": self.id_user,
            "id_packages": self.id_packages
        }
    def serialize2(self):
        package = Packages.query.filter_by(id=self.id_packages).first()
        return package.serialize()

##---------------------------------------ORDERHISTORY TABLE----------------------------------------------------------------

class OrderHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_shopping = db.Column(db.Integer,  db.ForeignKey('shopping.id'), nullable=False)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id') , nullable=False)

    def __repr__(self):
        return f'<OrderHistory {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_shopping": self.id_shopping,
            "id_user": self.id_user
        }

    def serialize2(self):
        # arr_shopping_list=list(map(lambda item: item.id_shopping, self.shopping))
        shopping_list = Shopping.query.filter_by(id=self.id_shopping).first()
        return shopping_list.serialize()