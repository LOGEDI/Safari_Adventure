from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

##-----------------------------------------  create a Many to Many---------------------------------------------------------
FavoritePackages = db.Table("favPackages",
     db.Column("users_id", db.Integer, db.ForeignKey("user.id"), primary_key=True),
     db.Column("packages_id", db.Integer, db.ForeignKey("packages.id"), primary_key=True)
)
##---------------------------------------PACKAGES TABLE----------------------------------------------------------------

class Packages(db.Model):
    __tablename__= 'packages'
    id = db.Column(db.Integer, primary_key=True)
    package_name = db.Column(db.String(120), unique=False, nullable=True)
    title = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(50), unique=False, nullable=True)
    tour_duration = db.Column(db.String(120), unique=False, nullable=True)
    destinations = db.Column(db.String(120), unique=False, nullable=True)
    activities = db.Column(db.String(120), unique=False, nullable=True)
    transport = db.Column(db.String(120), unique=False, nullable=True)
    lodging = db.Column(db.String(120), unique=False, nullable=True)
    overview_title = db.Column(db.String(120), unique=False, nullable=True)
    overview_acomodation = db.Column(db.String(120), unique=False, nullable=True)
    overview_description = db.Column(db.String(999), unique=False, nullable=True)

    def __repr__(self):
        return '<Packages %r>' % self.package_name

    def serialize(self):
        return {
            "id": self.id,
            "package_name": self.package_name,
            "title":self.title,
            "description": self.description,
            "tour_duration": self.tour_duration,
            "destinations": self.destinations,
            "activities": self.activities,
            "transport": self.transport,
            "lodging": self.lodging,
            "overview_title": self.overview_title,
            "overview_acomodation": self.overview_acomodation,
            "overview_description": self.overview_description,

        }
##-----------------------------------------USER TABLE--------------------------------------------------------------------

class User(db.Model):
    __tablename__="user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=True)
    country = db.Column(db.String(120), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True, default=True)
    favPackages = db.relationship(Packages, secondary=FavoritePackages, lazy='subquery', backref=db.backref('users', lazy=True))

    def __repr__(self):
        return f'<User {self.email}>'
        #  return '<User %r>' % self.username


    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "country": self.country,
            "email": self.email,
            "favPackages": self.get_fav_packages(),
            # do not serialize the password, its a security breach
        }

    def get_fav_packages(self):
        return list(map(lambda x : x.serialize(), self.favPackages))