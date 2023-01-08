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
    user_url = db.Column(db.String(250), nullable=True)
    premium = db.Column(db.Boolean, unique=False, default=False)
    admin = db.Column(db.Boolean, unique=False, default=False)
    favorites = db.relationship('Favorites', backref='user', cascade="all, delete-orphan", lazy=True)

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
            "user_url": self.user_url,
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
    overview_title1 = db.Column(db.String(120), nullable=True)
    overview_acomodation1 = db.Column(db.String(120), nullable=True)
    overview_description1 = db.Column(db.String(999), nullable=True)
    overview_title2 = db.Column(db.String(120), nullable=True)
    overview_acomodation2 = db.Column(db.String(120), nullable=True)
    overview_description2 = db.Column(db.String(999), nullable=True)
    overview_title3 = db.Column(db.String(120), nullable=True)
    overview_acomodation3 = db.Column(db.String(120), nullable=True)
    overview_description3 = db.Column(db.String(999), nullable=True)
    overview_title4 = db.Column(db.String(120), nullable=True)
    overview_acomodation4 = db.Column(db.String(120), nullable=True)
    overview_description4 = db.Column(db.String(999), nullable=True)
    overview_title5 = db.Column(db.String(120), nullable=True)
    overview_acomodation5 = db.Column(db.String(120), nullable=True)
    overview_description5 = db.Column(db.String(999), nullable=True)
    overview_title6 = db.Column(db.String(120), nullable=True)
    overview_acomodation6 = db.Column(db.String(120), nullable=True)
    overview_description6 = db.Column(db.String(999), nullable=True)
    overview_title7 = db.Column(db.String(120), nullable=True)
    overview_acomodation7 = db.Column(db.String(120), nullable=True)
    overview_description7 = db.Column(db.String(999), nullable=True)
    overview_title8 = db.Column(db.String(120), nullable=True)
    overview_acomodation8 = db.Column(db.String(120), nullable=True)
    overview_description8 = db.Column(db.String(999), nullable=True)
    overview_title9 = db.Column(db.String(120), nullable=True)
    overview_acomodation9 = db.Column(db.String(120), nullable=True)
    overview_description9 = db.Column(db.String(999), nullable=True)
    overview_title10 = db.Column(db.String(120), nullable=True)
    overview_acomodation10 = db.Column(db.String(120), nullable=True)
    overview_description10 = db.Column(db.String(999), nullable=True)
    overview_title11 = db.Column(db.String(120), nullable=True)
    overview_acomodation11 = db.Column(db.String(120), nullable=True)
    overview_description11 = db.Column(db.String(999), nullable=True)
    overview_title12 = db.Column(db.String(120), nullable=True)
    overview_acomodation12 = db.Column(db.String(120), nullable=True)
    overview_description12 = db.Column(db.String(999), nullable=True)
    overview_title13 = db.Column(db.String(120), nullable=True)
    overview_acomodation13 = db.Column(db.String(120), nullable=True)
    overview_description13 = db.Column(db.String(999), nullable=True)
    overview_title14 = db.Column(db.String(120), nullable=True)
    overview_acomodation14 = db.Column(db.String(120), nullable=True)
    overview_description14 = db.Column(db.String(999), nullable=True)
    overview_title15 = db.Column(db.String(120), nullable=True)
    overview_acomodation15 = db.Column(db.String(120), nullable=True)
    overview_description15 = db.Column(db.String(999), nullable=True)
    url = db.Column(db.String(250), nullable=True)
    url1 = db.Column(db.String(250), nullable=True)
    url2 = db.Column(db.String(250), nullable=True)
    url3 = db.Column(db.String(250), nullable=True)
    url4 = db.Column(db.String(250), nullable=True)
    url5 = db.Column(db.String(250), nullable=True)
    url6 = db.Column(db.String(250), nullable=True)
    url7 = db.Column(db.String(250), nullable=True)
    url8 = db.Column(db.String(250), nullable=True)
    url9 = db.Column(db.String(250), nullable=True)
    url10 = db.Column(db.String(250), nullable=True)
    url11 = db.Column(db.String(250), nullable=True)
    url12 = db.Column(db.String(250), nullable=True)
    url13 = db.Column(db.String(250), nullable=True)
    url14 = db.Column(db.String(250), nullable=True)
    url15 = db.Column(db.String(250), nullable=True)
    favorite = db.relationship('Favorites', backref='packages', cascade="all, delete-orphan", lazy=True)

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
            "overview_title1": self.overview_title1,
            "overview_acomodation1": self.overview_acomodation1,
            "overview_description1": self.overview_description1,
            "overview_title2": self.overview_title2,
            "overview_acomodation2": self.overview_acomodation2,
            "overview_description2": self.overview_description2,
            "overview_title3": self.overview_title3,
            "overview_acomodation3": self.overview_acomodation3,
            "overview_description3": self.overview_description3,
            "overview_title4": self.overview_title4,
            "overview_acomodation4": self.overview_acomodation4,
            "overview_description4": self.overview_description4,
            "overview_title5": self.overview_title5,
            "overview_acomodation5": self.overview_acomodation5,
            "overview_description5": self.overview_description5,
            "overview_title6": self.overview_title6,
            "overview_acomodation6": self.overview_acomodation6,
            "overview_description6": self.overview_description6,
            "overview_title7": self.overview_title7,
            "overview_acomodation7": self.overview_acomodation7,
            "overview_description7": self.overview_description7,
            "overview_title8": self.overview_title8,
            "overview_acomodation8": self.overview_acomodation8,
            "overview_description8": self.overview_description8,
            "overview_title9": self.overview_title9,
            "overview_acomodation9": self.overview_acomodation9,
            "overview_description9": self.overview_description9,
            "overview_title10": self.overview_title10,
            "overview_acomodation10": self.overview_acomodation10,
            "overview_description10": self.overview_description10,
            "overview_title11": self.overview_title11,
            "overview_acomodation11": self.overview_acomodation11,
            "overview_description11": self.overview_description11,
            "overview_title12": self.overview_title12,
            "overview_acomodation12": self.overview_acomodation12,
            "overview_description12": self.overview_description12,
            "overview_title13": self.overview_title13,
            "overview_acomodation13": self.overview_acomodation13,
            "overview_description13": self.overview_description13,  
            "overview_title14": self.overview_title14,
            "overview_acomodation14": self.overview_acomodation14,
            "overview_description14": self.overview_description14,
            "overview_title15": self.overview_title15,
            "overview_acomodation15": self.overview_acomodation15,
            "overview_description15": self.overview_description15,                           
            "url": self.url,
            "url1": self.url1,
            "url2": self.url2,
            "url3": self.url3,
            "url4": self.url4,
            "url5": self.url5,
            "url6": self.url6,
            "url7": self.url7,
            "url8": self.url8,
            "url9": self.url9,
            "url10": self.url10,
            "url11": self.url11,
            "url12": self.url12,
            "url13": self.url13,
            "url14": self.url14,
            "url15": self.url15,
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