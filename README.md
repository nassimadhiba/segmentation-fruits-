S**egmentation et Détection Automatique de Fruits**
 
Ce projet vise à détecter, segmenter et compter automatiquement des fruits à partir d’images, en utilisant la vision par ordinateur.
Il inclut également une interface web interactive pour visualiser les résultats en temps réel.

Le modèle a été entraîné et évalué avec des métriques standard : précision, rappel, F1-score et IoU.

**Fonctionnalités**

Détection des fruits : Identification automatique des fruits présents sur l’image.

Segmentation : Masques précis des fruits détectés pour une meilleure visualisation et comptage.

Comptage automatique : Compte des fruits détectés dans chaque image.

Interface web interactive : Permet de visualiser les résultats et d’interagir avec les images et masques générés.

Évaluation du modèle : Performance mesurée via précision, rappel, F1-score et Intersection over Union (IoU).

**Technologies et Outils**

Frameworks & Modèles :

YOLOv8 → Détection et segmentation d’objets

Roboflow → Prétraitement et annotation des images

Langages : Python (backend) et JavaScript (interface web)

Bibliothèques :

OpenCV → Traitement d’images

Flask / FastAPI → Création de l’API backend

Plotly / Dash / React → Interface web interactive

Environnement : Google Colab / VS Code pour entraînement et tests
