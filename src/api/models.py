from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), nullable=False)
    password = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(250), nullable=False)
    name = db.Column(db.String(250), nullable=True)
    lastname = db.Column(db.String(250), nullable=True)
    country = db.Column(db.String(120), nullable=True)
    premium = db.Column(db.Boolean, unique=False, default=False)
    admin = db.Column(db.Boolean, unique=False, default=False)
    favorites = db.relationship('Favorites', backref='user', cascade="all, delete-orphan", lazy=True)
    comment = db.relationship('Comment', backref='user', cascade="all, delete-orphan", lazy=True)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "country": self.country,
            "premium": self.premium,
            "admin": self.admin,
            # do not serialize the password, its a security breach
        }

class Packages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    category = db.Column(db.String(120), nullable=True)
    description = db.Column(db.String(950), nullable=True)
    title = db.Column(db.String(120), nullable=True)
    tour_duration = db.Column(db.String(120), nullable=True)
    destinations = db.Column(db.String(120), nullable=True)
    activities = db.Column(db.String(120), nullable=True)
    transport = db.Column(db.String(120), nullable=True)
    lodging = db.Column(db.String(120), nullable=True)
    overview_title = db.Column(db.String(120), nullable=True)
    overview_acomodation = db.Column(db.String(120), nullable=True)
    overview_description = db.Column(db.String(999), nullable=True)
    url = db.Column(db.String(250), nullable=True)
    favorite = db.relationship('Favorites', backref='packages', cascade="all, delete-orphan", lazy=True)
    comment = db.relationship('Comment', backref='packages', cascade="all, delete-orphan", lazy=True)

    def __repr__(self):
        return f'<Packages {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "description": self.description,
            "title":self.title,
            "tour_duration": self.tour_duration,
            "destinations": self.destinations,
            "activities": self.activities,
            "transport": self.transport,
            "lodging": self.lodging,
            "overview_title": self.overview_title,
            "overview_acomodation": self.overview_acomodation,
            "overview_description": self.overview_description,                       
            "url": self.url,
        }

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

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(999),nullable=False)
    id_user = db.Column(db.Integer,  db.ForeignKey('user.id'), nullable=False )
    id_packages = db.Column(db.Integer, db.ForeignKey('packages.id') , nullable=True)

    def __repr__(self):
        return f'<Comment {self.id}>'

    def serialize(self):
        return {
            # "id": self.id,
            "id_user": self.id_user,
            "id_packages": self.id_packages,
            "comment": self.comment

        }

    def serialize2(self):
        package = Packages.query.filter_by(id=self.id_packages).first()
        return package.serialize()

    def __init__(self,id_user,id_packages,comment):
        self.id_user = id_user
        self.id_packages = id_packages
        self.comment = comment
