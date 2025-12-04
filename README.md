# Akatsuki Theme Portfolio

A premium portfolio website inspired by the Akatsuki aesthetic fused with Apple-style UI design.

## Features
- **Akatsuki Aesthetic**: Deep black and red palette, glowing accents, floating clouds.
- **Apple-Style UI**: Glassmorphism, rounded corners, smooth animations.
- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Interactive Elements**: Hover effects, floating animations, mobile menu.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Background Image
To use your looping background GIF:
1. Copy your GIF file (`akatsuki 暁.gif`) to the `public` folder.
2. Rename it to `background.gif` (or update the code).
3. Open `src/components/Hero.jsx`.
4. Uncomment the image tag and update the path:
   ```jsx
   {/* <img src="/background.gif" className="w-full h-full object-cover opacity-60" /> */}
   ```
   Or replace the gradient div with your image/video component.

### Contact Info
Update your contact details in:
- `src/components/Navbar.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## Tech Stack
- React
- Tailwind CSS
- Framer Motion
- Lucide React
