# 🏥 Living Patient Appointment Experience

A modern, mobile-first healthcare application designed to guide patients through every step of their medical journey—from symptom checking to appointment booking, hospital navigation, and post-visit follow-up.

## 👩‍💼 Student Information

| Field | Details |
|-------|---------|
| **Student Name** | INEZA Christella |
| **Registration Number** | 25RP01964 |
| **Repository** | [github.com/christella06/25RP01964](https://github.com/christella06/25RP01964.git) |

## ✨ Features

- **Symptom Recognition**: Smart, reassuring symptom selection interface
- **Doctor Finder**: AI-recommended healthcare providers based on symptoms
- **Appointment Booking**: Quick and intuitive booking system with date/time selection
- **Hospital Check-in**: Real-time hospital arrival tracking and verification
- **Waiting Room**: Live queue position and estimated wait times
- **Post-Visit Summary**: Diagnosis, medications, and follow-up care instructions
- **Follow-up Reminders**: Personalized reminder notifications and care tracking
- **Glasmorphism UI**: Modern frosted glass design with smooth animations
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (CDN)
- **Icons**: lucide-react
- **State Management**: React Hooks
- **Animations**: CSS transitions and keyframe animations

## 📦 Project Structure

```
25RP01964/
├── src/
│   ├── screens/
│   │   ├── HomePage.jsx              # Welcome page with glasmorphism design
│   │   ├── SymptomChecker.jsx        # Symptom selection interface
│   │   ├── FindDoctor.jsx            # Doctor recommendation and selection
│   │   ├── BookAppointment.jsx       # Date and time booking
│   │   ├── AppointmentConfirmed.jsx  # Confirmation and reminders
│   │   ├── CheckInAtHospital.jsx     # Hospital arrival check-in
│   │   ├── WaitingRoom.jsx           # Waiting queue display
│   │   ├── PostVisitSummary.jsx      # Visit summary and medications
│   │   └── FollowUpReminder.jsx      # Follow-up care reminders
│   ├── App.jsx                       # Main app shell and routing
│   ├── App.css                       # Global styles
│   ├── index.css                     # Tailwind and base styles
│   └── main.jsx                      # React entry point
├── index.html                        # HTML template with Tailwind CDN
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint rules
└── package.json                      # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/christella06/25RP01964.git
cd 25RP01964
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```
Generated files will be in the `dist/` directory.

## 🎨 Design System

### Color Palette
- **Primary**: Emerald (`emerald-600` to `emerald-800`)
- **Secondary**: Teal (`teal-600`)
- **Accents**: Green, Blue, Orange
- **Backgrounds**: Light slate with gradients
- **Glasmorphism**: Semi-transparent white with blur effects

### Typography
- **Headings**: Bold, clear hierarchy (24px - 48px)
- **Body**: Medium weight, readable (14px - 16px)
- **Captions**: Small, secondary text (12px - 13px)

## 📱 User Flow

1. **Home Page** → User lands on welcoming glasmorphic interface
2. **Symptom Selection** → User chooses relevant symptoms
3. **Doctor Finding** → System recommends suitable healthcare providers
4. **Appointment Booking** → User selects date and time
5. **Confirmation** → User reviews and confirms appointment details
6. **Hospital Navigation** → Real-time check-in and tracking
7. **Wait Management** → Queue status and estimated wait times
8. **Visit Summary** → Post-visit diagnosis and medication info
9. **Follow-up Care** → Reminders and next steps

## 🎯 Key Features Explained

### Glasmorphism Design
- Semi-transparent cards with `backdrop-blur` effect
- Subtle borders and shadows for depth
- Smooth hover animations and transitions
- Gradient overlays and animated blob backgrounds

### Mobile-First Approach
- Touch-friendly buttons and inputs
- Responsive grid layouts
- Optimized spacing for smaller screens
- Full-screen aware design

### User Experience
- Clear visual feedback on interactions
- Intuitive navigation flow
- Reassuring messaging (low-stress design)
- Accessibility considerations with proper contrast

## 🔧 Development Scripts

| Script | Description |
|--------|------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

## 📋 Component Documentation

### HomePage
- Main entry point with glasmorphic design
- Animated blob backgrounds
- Call-to-action button to start the journey

### SymptomChecker
- Grid of symptom cards with icons
- Multi-select capability
- Smooth transitions and hover effects

### FindDoctor
- List of recommended doctors with specialties
- Availability indicators
- Selection highlight with checkmark

### BookAppointment
- Date input with min-date validation
- Time slot grid (8 options)
- Real-time summary display

### Hospital Check-in & Queue Management
- Real-time arrival confirmation
- Estimated wait time display
- Status indicators and animations

### Post-Visit & Follow-up
- Diagnosis and medication display
- Reminder toggle functionality
- Care instructions and next steps

## 🎓 Learning Outcomes

This project demonstrates:
- React component composition and state management
- Tailwind CSS utility-first styling
- Responsive design principles
- Modern UI/UX patterns (glasmorphism)
- Healthcare application workflow design
- Mobile-first development approach

## 📝 Notes

- The app uses client-side state management (React hooks)
- All styling is handled through Tailwind CSS
- Icons are from lucide-react library
- No external backend required (demo mode)

## 📧 Contact

**Student**: INEZA Christella  
**Registration**: 25RP01964  
**Repository**: [https://github.com/christella06/25RP01964.git](https://github.com/christella06/25RP01964.git)

---

**Built with ❤️ for better patient care experiences**
