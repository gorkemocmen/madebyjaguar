from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load fortunes once at startup
with open('txts/fortunes.txt', 'r', encoding='utf-8') as f:
    fortunes = [line.strip() for line in f if line.strip()]
    
@app.route('/api/fortune', methods=['GET'])
def get_fortune():
    fortune = random.choice(fortunes)
    return jsonify({'fortune': fortune})
    



with open('txts/meditations.txt', 'r', encoding='utf-8') as f:
    meditations = [line.strip() for line in f if line.strip()]
    
@app.route('/api/meditation', methods=['GET'])
def get_meditation():
    meditation = random.choice(meditations)
    return jsonify({'meditation': meditation})
    



with open('txts/motivations.txt', 'r', encoding='utf-8') as f:
    motivations = [line.strip() for line in f if line.strip()]

@app.route('/api/motivation', methods=['GET'])
def get_motivation():
    motivation = random.choice(motivations)
    return jsonify({'motivation': motivation})


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0', port=5000)
