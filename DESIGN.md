---
name: Aetheric Professional
colors:
  surface: '#0d131e'
  surface-dim: '#0d131e'
  surface-bright: '#333945'
  surface-container-lowest: '#080e19'
  surface-container-low: '#161c27'
  surface-container: '#1a202b'
  surface-container-high: '#242a36'
  surface-container-highest: '#2f3541'
  on-surface: '#dde2f2'
  on-surface-variant: '#c3c7ce'
  inverse-surface: '#dde2f2'
  inverse-on-surface: '#2b313c'
  outline: '#8c9198'
  outline-variant: '#42474d'
  surface-tint: '#a9caeb'
  primary: '#a9caeb'
  on-primary: '#0e334e'
  primary-container: '#81a1c1'
  on-primary-container: '#143853'
  inverse-primary: '#41617e'
  secondary: '#a6c9f8'
  on-secondary: '#033258'
  secondary-container: '#264b73'
  on-secondary-container: '#98bbe9'
  tertiary: '#97cfe0'
  on-tertiary: '#003640'
  tertiary-container: '#6ea6b6'
  on-tertiary-container: '#003b46'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cee5ff'
  primary-fixed-dim: '#a9caeb'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#294965'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#a6c9f8'
  on-secondary-fixed: '#001c37'
  on-secondary-fixed-variant: '#234970'
  tertiary-fixed: '#b3ecfc'
  tertiary-fixed-dim: '#97cfe0'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#094e5c'
  background: '#0d131e'
  on-background: '#dde2f2'
  surface-variant: '#2f3541'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  section-gap: 8rem
  stack-gap: 1.5rem
  gutter: 2rem
  margin-mobile: 1.25rem
  margin-desktop: 4rem
---

## Brand & Style
The brand personality is "Celestial Professionalism"—a fusion of high-end executive presence with the ethereal aesthetics of a high-tech future. It targets recruiters and collaborators in the creative tech, AI, and aerospace sectors who value both precision and visionary thinking.

The design style is a **Refined Glassmorphism**. It utilizes multi-layered translucency, soft-focus background blurs, and light-diffusing surfaces to create a sense of depth without weight. The interface should feel like a holographic projection—luminous, calm, and intellectually stimulating. Visual interest is driven by "light-leaks" (soft gradients) rather than heavy textures or physical metaphors.

## Colors
The palette is rooted in **Deep Space Indigo** and **Soft Slate**, moving away from pure blacks to maintain a sophisticated "midnight" atmosphere. 

- **Primary (Slate Blue):** Used for interactive states and primary icons.
- **Secondary (Deep Indigo):** Used for structural depth and heavy contrast.
- **Tertiary (Frost Cyan):** Reserved for "Neon Accents"—status indicators, hover glows, and thin border highlights.
- **Surface:** Uses a base of frosted glass whites at low opacity (3-8%) to allow background gradients to bleed through, maintaining the "ethereal" quality.

## Typography
The system employs a high-contrast typographic pairing to balance "futuristic" and "professional." 

**Syne** is used for headlines, always set in an italic style. This provides the "cursive" futuristic touch requested, suggesting movement and forward-thinking energy. **Inter** handles the heavy lifting of the CV content, ensuring maximum legibility for long descriptions and bullet points. **Geist** is used for technical labels and meta-data (like dates and skill tags) to reinforce the high-tech, developer-centric aesthetic.

## Layout & Spacing
This design system uses a **Fluid Center-Aligned Grid**. The layout should feel airy, with significant vertical breathing room (`8rem` between major CV sections like "Experience" and "Education") to prevent the glass elements from feeling cluttered.

- **Mobile:** Single column with generous horizontal margins (`1.25rem`). Cards stack vertically with a `1.5rem` gap.
- **Desktop:** 12-column grid. Key information (Experience) typically spans 8 columns, while meta-information (Skills, Contact) occupies a 4-column sidebar or secondary track.
- **Glass Padding:** Internal padding for glass cards should be consistent at `2.5rem` on desktop to maintain the "premium" feel.

## Elevation & Depth
Depth is not communicated through shadows, but through **Backdrop Blur** and **Luminous Borders**.

1.  **Level 1 (Base):** Deep indigo background with two large, blurred "Aura" gradients (Primary and Tertiary colors) at 15% opacity moving slowly in the background.
2.  **Level 2 (Cards):** Surfaces use `backdrop-filter: blur(20px)` and a `0.5px` solid border (`glass_stroke`).
3.  **Level 3 (Interactive):** On hover, a card's border increases in opacity and gains a subtle outer glow (0px 0px 15px) in the `tertiary_color`. 

Avoid drop shadows entirely; instead, use light to define hierarchy.

## Shapes
The shape language is "Soft Geometric." Rounded corners (`0.5rem` or `rounded-md`) are used to take the edge off the technical aesthetic, making it feel more approachable and "liquid." 

Interactive elements like buttons or chips should use slightly more aggressive rounding (`1rem`) to differentiate them from structural layout containers. Neon-accented borders should follow these radii precisely to maintain the "machined" look.

## Components
- **Glass Cards:** The core container. Must have a subtle top-to-bottom gradient fill (White 5% to White 2%) and a fine white border at 12% opacity.
- **Neon-Accented Buttons:** Primary buttons are ghost-style with a 1px `tertiary_color` border. On hover, they fill with the `primary_color` at 20% opacity and trigger a subtle glow.
- **Skill Chips:** Small, semi-transparent capsules with `label-sm` typography. They should have a 1px border that matches the `tertiary_color`.
- **Timeline/Lists:** Experience items are connected by a 1px vertical line with a "pulse" dot at each entry point. The dot should have a radial glow effect.
- **Input Fields:** Minimalist under-line style or fully transparent glass boxes with a bright focus state.
- **Section Headers:** Combine a `label-md` "kicker" (e.g., 01. EXPERIENCE) in `tertiary_color` followed by a `headline-lg` title.