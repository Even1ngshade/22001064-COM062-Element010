from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

connection = sqlite3.connect("DDW.db")
connection.execute('CREATE TABLE IF NOT EXISTS CARS (carIndex INTEGER, make TEXT, model TEXT, reg TEXT, colour TEXT, miles TEXT, price INTEGER, dealer TEXT, town TEXT, telephone TEXT, description TEXT, region TEXT)')

@app.route("/home")
def main():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM CARS")
    cars = cursor.fetchall()
    connection.close()  # Close connection after fetching data

    return render_template("index.html", cars=cars)

@app.route("/getCars")
def getCars():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM CARS")
    cars = cursor.fetchall()
    connection.close()
    return jsonify(cars=cars)

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/login", methods = ["GET", "POST"])
def login():
    name = request.form["Name"]
    password = request.form["Password"]
    return render_template("login.html")
# make one value for name and password instead of making a new table/database for it as it would be difficult to make it connect with the car database

if __name__ == "__main__":
    app.run()