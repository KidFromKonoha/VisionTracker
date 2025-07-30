# 🚓 VisionTrack – AI-Powered Rogue Driver Detection & Enforcement System

> *"Reclaiming India's highways — one reckless driver at a time."*

![VisionTrack Banner](banner-placeholder.png)

## 🚀 Overview

**VisionTrack** is an AI-powered, real-time violation detection and enforcement system that uses deep learning and cloud automation to identify, log, and escalate instances of rogue driving on Indian highways. Our solution targets overspeeding, wrong-way driving, dangerous overtakes, and distracted behavior — contributing factors in over **1.5 lakh fatalities** annually.

### 🎯 Problem We’re Solving

India has the **highest number of road accident deaths in the world**. The root causes?

- Manual, reactive enforcement
- Inadequate surveillance (less than 5% coverage)
- Corruption-prone systems

**VisionTrack** fills this enforcement gap with affordable, scalable, AI-based monitoring — using edge devices and a robust cloud architecture.

---

## 🧠 Key Features

- 🎥 **Real-time Violation Detection**  
  YOLOv7-powered object detection to flag dangerous behavior from dashcam footage.

- 📡 **Edge-AI Inference Ready**  
  Designed for Raspberry Pi or ARM-based SoC devices for real-world deployment.

- ☁️ **Cloud-Connected Ecosystem**  
  FastAPI backend + AWS storage + PostgreSQL + DynamoDB for logging and event processing.

- 🧾 **Tamper-proof Audit Trails**  
  Violation logs are cryptographically verified using **Hyperledger Fabric**.

- 📊 **Fleet Manager Dashboard**  
  Responsive React dashboard with filters, analytics, charts, and violation video previews.

---

## 🔩 Tech Stack

| Layer             | Tools & Frameworks |
|------------------|--------------------|
| 🧠 AI/ML          | YOLOv7, U-Net, PyTorch, MLflow, SageMaker |
| 📹 Edge Device    | Raspberry Pi 4 (Prototype), ONNX Runtime |
| ☁️ Backend        | FastAPI, Docker, PostgreSQL (Amazon RDS), DynamoDB, Amazon S3 |
| 🔐 Blockchain     | Hyperledger Fabric (Audit Trail) |
| 🌐 Frontend       | React.js, TailwindCSS, D3.js, Chart.js, Mapbox |
| 🧪 DevOps & Infra | AWS, GitHub, Docker Compose, Kubernetes (future) |

---

## 📈 Impact & Goals

- 50% reduction in highway violations (2-year outlook)
- 30% fewer road accidents via proactive flagging
- 20% reduction in enforcement costs
- Community-led reporting and feedback loop

---

## 📸 Screenshots

> *(Add screenshots of your dashboard UI, detection bounding boxes, etc.)*

- Dashboard View with Real-Time Logs  
- Map + Violation Heatmap  
- Detection Overlay with YOLO  
- Admin Panel UI

---

## 📽️ Video Demonstration

> 📺 [Watch the Demo Video](link-to-your-video.mp4)  
(*Required for Tata InnoVent submission*)

---

## 🔮 Roadmap

- ✅ Basic YOLOv7 Integration on Sample Video  
- ✅ REST API for Violation Logging  
- ✅ Dashboard UI with Chart.js and Table Filters  
- 🔜 Mobile App for Citizen Reporting  
- 🔜 Federated Learning for Edge Personalization  
- 🔜 Solar-powered outdoor variant  
- 🔜 Real-time LTE/IoT sync for live incident updates  

---

## 👨‍💻 Team VisionTrackers

| Name                | Role                         | Expertise                    |
|---------------------|------------------------------|------------------------------|
| **P. Mohan Reddy**  | Team Lead, Backend Dev       | Django, REST APIs, DBs       |
| Soumya Safallya     | ML Developer                 | PyTorch, Deep Learning       |
| Samikhya Panigrahi  | AI/ML Engineer               | YOLO, Lane Detection         |
| Mansi Maharana      | Frontend Developer           | HTML, CSS, JS, Figma         |

---

## 🏁 How to Run the Project (Local Dev)

```bash
# 1. Clone the repository
git clone https://github.com/YourGitHub/VisionTrack.git
cd VisionTrack

# 2. Install dependencies
cd backend
pip install -r requirements.txt

cd ../frontend
npm install

# 3. Run the backend server
cd ../backend
uvicorn main:app --reload

# 4. Run the frontend
cd ../frontend
npm run dev
