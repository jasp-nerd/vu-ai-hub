'use client';

export default function HeroArtwork() {
  return (
    <svg viewBox="100 180 600 440" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="float-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#001829" floodOpacity="0.15" />
        </filter>

        <filter id="screen-glow-filter" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <style>{`
        .screen-backlight {
          animation: screenOn 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .code-line {
          animation: codeReveal 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .code-line-1 { animation-delay: 0.1s; }
        .code-line-2 { animation-delay: 0.2s; }
        .code-line-3 { animation-delay: 0.3s; }
        .code-line-4 { animation-delay: 0.4s; }
        .code-line-5 { animation-delay: 0.5s; }
        .code-line-6 { animation-delay: 0.6s; }

        .chat-bubble-group {
          animation: bubbleRise 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: -25px 40px;
        }

        .typing-indicator {
          animation: typingFade 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .dot {
          animation: dotPulse 1.2s ease-in-out infinite;
        }
        .dot-1 { animation-delay: 0s; }
        .dot-2 { animation-delay: 0.15s; }
        .dot-3 { animation-delay: 0.3s; }

        .lightbulb {
          animation: bulbFade 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center;
        }

        @keyframes screenOn {
          0%, 10% { opacity: 0; }
          15%, 88% { opacity: 1; }
          92%, 100% { opacity: 0; }
        }

        @keyframes codeReveal {
          0%, 15% { opacity: 0; transform: translateY(6px); }
          20%, 85% { opacity: 1; transform: translateY(0); }
          88%, 100% { opacity: 0; transform: translateY(6px); }
        }

        @keyframes bubbleRise {
          0%, 20% { opacity: 0; transform: translateY(20px) scale(0); }
          25% { opacity: 1; transform: translateY(0px) scale(1.05); }
          28% { transform: translateY(0px) scale(1); }
          45% { transform: translateY(-3px) scale(1); }
          65% { transform: translateY(2px) scale(1); }
          82% { opacity: 1; transform: translateY(0px) scale(1); }
          88%, 100% { opacity: 0; transform: translateY(15px) scale(0.6); }
        }

        @keyframes typingFade {
          0%, 26% { opacity: 0; }
          28%, 46% { opacity: 1; }
          48%, 100% { opacity: 0; }
        }

        @keyframes dotPulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes bulbFade {
          0%, 46% { opacity: 0; transform: scale(0.5); }
          50%, 82% { opacity: 1; transform: scale(1); }
          86%, 100% { opacity: 0; transform: scale(0.8); }
        }
      `}</style>

      {/* Isometric Desk Base */}
      <g id="desk">
        <polygon points="400,320 650,445 400,570 150,445" fill="#E7E5E4" className="dark:hidden" />
        <polygon points="150,445 400,570 400,590 150,465" fill="#D6D3D1" className="dark:hidden" />
        <polygon points="400,570 650,445 650,465 400,590" fill="#78716C" className="dark:hidden" />
        <polygon points="400,320 650,445 400,570 150,445" fill="#292524" className="hidden dark:block" />
        <polygon points="150,445 400,570 400,590 150,465" fill="#1c1917" className="hidden dark:block" />
        <polygon points="400,570 650,445 650,465 400,590" fill="#44403c" className="hidden dark:block" />
      </g>

      {/* Books Stack — shifted left to balance with centered laptop */}
      <g id="books" transform="translate(-40, 0)">
        <polygon points="520,410 590,445 540,470 470,435" fill="rgba(0,0,0,0.12)" transform="translate(0, 10)" />

        <polygon points="520,410 590,445 540,470 470,435" fill="#0077B3" />
        <polygon points="470,435 540,470 540,482 470,447" fill="#F5F5F4" />
        <polygon points="540,470 590,445 590,457 540,482" fill="#004F7A" />

        <polygon points="520,396 584,428 538,451 474,419" fill="#78716C" />
        <polygon points="474,419 538,451 538,461 474,429" fill="#F5F5F4" />
        <polygon points="538,451 584,428 584,438 538,461" fill="#57534E" />

        <polygon points="525,384 585,414 545,434 485,404" fill="#38BDF8" />
        <polygon points="485,404 545,434 545,442 485,412" fill="#F5F5F4" />
        <polygon points="545,434 585,414 585,422 545,442" fill="#0077B3" />
      </g>

      {/* Laptop — shifted left for better centering on desk */}
      <g id="laptop" transform="translate(-30, 10)">
        <polygon points="340,330 460,390 380,430 260,370" fill="rgba(0,0,0,0.15)" transform="translate(0, 15)" />

        <polygon points="260,370 380,430 380,436 260,376" fill="#003B5C" />
        <polygon points="380,430 460,390 460,396 380,436" fill="#00273D" />

        <polygon points="340,330 460,390 380,430 260,370" fill="#004F7A" />

        {/* Keyboard keys on the base surface */}
        <g transform="matrix(1.2, 0.6, -0.8, 0.4, 340, 330)">
          {/* Row 0 */}
          <rect x="15" y="38" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="28" y="38" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="41" y="38" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="54" y="38" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="67" y="38" width="11" height="9" rx="1.5" fill="#003350" />
          {/* Row 1 */}
          <rect x="17" y="50" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="30" y="50" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="43" y="50" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="56" y="50" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="69" y="50" width="11" height="9" rx="1.5" fill="#003350" />
          {/* Row 2 */}
          <rect x="19" y="62" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="32" y="62" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="45" y="62" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="58" y="62" width="11" height="9" rx="1.5" fill="#003350" />
          <rect x="71" y="62" width="11" height="9" rx="1.5" fill="#003350" />
          {/* Space bar */}
          <rect x="30" y="74" width="35" height="9" rx="1.5" fill="#003350" />
        </g>

        <polygon points="340,330 360,230 356,228 336,328" fill="#003B5C" />
        <polygon points="360,230 480,290 476,288 356,228" fill="#00273D" />

        <polygon points="340,330 460,390 480,290 360,230" fill="#001829" />

        <g transform="matrix(1, 0.5, -0.2, 1, 360, 230)">
          <rect x="4" y="4" width="112" height="92" fill="#000E17" rx="1" />

          <rect className="screen-backlight" x="4" y="4" width="112" height="92" fill="#00223D" rx="1" filter="url(#screen-glow-filter)" />

          <g opacity="1">
            <rect className="code-line code-line-1" x="12" y="14" width="60" height="4" rx="2" fill="#78716C" />
            <rect className="code-line code-line-2" x="12" y="26" width="45" height="4" rx="2" fill="#38BDF8" opacity="0.9" />
            <rect className="code-line code-line-3" x="22" y="38" width="75" height="4" rx="2" fill="#0077B3" />
            <rect className="code-line code-line-4" x="22" y="50" width="30" height="4" rx="2" fill="#78716C" opacity="0.7" />
            <rect className="code-line code-line-5" x="12" y="62" width="85" height="4" rx="2" fill="#0077B3" />
            <rect className="code-line code-line-6" x="12" y="74" width="55" height="4" rx="2" fill="#38BDF8" />


          </g>
        </g>
      </g>

      {/* Floating Chat Bubble — adjusted position for new laptop placement */}
      <g transform="translate(500, 230)">
        <g className="chat-bubble-group">
          <path d="M -28 -25
                   L 28 -25
                   A 12 12 0 0 1 40 -13
                   L 40 13
                   A 12 12 0 0 1 28 25
                   L -10 25
                   L -25 40
                   L -20 25
                   L -28 25
                   A 12 12 0 0 1 -40 13
                   L -40 -13
                   A 12 12 0 0 1 -28 -25 Z"
                fill="#0077B3"
                filter="url(#float-shadow)" />

          <g className="typing-indicator">
            <circle className="dot dot-1" cx="-12" cy="0" r="3" fill="#FFFFFF" />
            <circle className="dot dot-2" cx="0" cy="0" r="3" fill="#FFFFFF" />
            <circle className="dot dot-3" cx="12" cy="0" r="3" fill="#FFFFFF" />
          </g>

          <g className="lightbulb">
            <path d="M0,-9
                     C-3.5,-9 -6,-6.5 -6,-3
                     C-6,-0.5 -4,1.5 -3,3
                     L-3,5
                     C-3,5.5 -2.5,6 -2,6
                     L2,6
                     C2.5,6 3,5.5 3,5
                     L3,3
                     C4,1.5 6,-0.5 6,-3
                     C6,-6.5 3.5,-9 0,-9 Z
                     M-1.5,6 L1.5,6
                     M-1,8 L1,8"
                  fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0,-5 L0,-3 M-2,-3 L2,-3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  );
}
