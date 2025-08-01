from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/")
def home():
    return "MineOps backend is running!"

@app.route("/api/shifts", methods=["GET"])
def get_shifts():
    dummy_shifts = [
        {"id": 1, "shift": "Morning", "supervisor": "Ravi", "notes": "Normal operations"},
        {"id": 2, "shift": "Evening", "supervisor": "Anjali", "notes": "Gas alert handled"},
    ]
    return jsonify(dummy_shifts)

@app.route("/api/shifts", methods=["POST"])
def add_shift():
    data = request.get_json()
    return jsonify({"message": "Shift record received", "data": data}), 201

if __name__ == "__main__":
    app.run(debug=True, port=5050)


