import React from "react";


function Logo({ ...props }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 501 130"
        {...props}
      >
        <g clipPath="url(#clip0_2_48)">
          <path
            fill="#292E2E"
            d="M186.6 110.4V19.6h34.1c7 0 12.8 1.3 17.6 3.9 4.8 2.6 8.4 6.2 10.8 10.7 2.5 4.5 3.7 9.7 3.7 15.4 0 5.8-1.2 11-3.7 15.5s-6.1 8.1-10.9 10.7c-4.8 2.6-10.7 3.9-17.7 3.9h-22.6V66.2h20.4c4.1 0 7.4-.7 10-2.1 2.6-1.4 4.5-3.4 5.8-5.9 1.3-2.5 1.9-5.3 1.9-8.6 0-3.2-.6-6.1-1.9-8.5-1.2-2.5-3.2-4.4-5.8-5.7-2.6-1.4-6-2.1-10.1-2.1h-15.1v77.1h-16.5zM283.4 19.6v90.8H267V19.6h16.4zM301.2 110.4V19.6h34.1c7 0 12.8 1.3 17.6 3.9 4.8 2.6 8.4 6.2 10.8 10.7 2.5 4.5 3.7 9.7 3.7 15.4 0 5.8-1.2 11-3.7 15.5s-6.1 8.1-10.9 10.7c-4.8 2.6-10.7 3.9-17.7 3.9h-22.6V66.2h20.4c4.1 0 7.4-.7 10-2.1 2.6-1.4 4.5-3.4 5.8-5.9 1.3-2.5 1.9-5.3 1.9-8.6 0-3.2-.6-6.1-1.9-8.5-1.2-2.5-3.2-4.4-5.8-5.7-2.6-1.4-6-2.1-10.1-2.1h-15.1v77.1h-16.5zM381.6 110.4V19.6h16.5v77h40v13.8h-56.5zM428.2 33.4V19.6h72.5v13.8h-28.1v77h-16.3v-77h-28.1z"
          ></path>
          <path
            fill="#FF205B"
            d="M17 0h96c9.4 0 17 7.6 17 17v96c0 9.4-7.6 17-17 17H17c-9.4 0-17-7.6-17-17V17C0 7.6 7.6 0 17 0z"
          ></path>
          <path
            fill="#FBEFF2"
            d="M89.3 58.2c1.6 11-2.4 19.8-14.3 25.9-10.8 5.5-28 7.1-28 7.1-1.6-11-4.6-38 12.5-46.6 10.8-5.5 27.1-.1 29.8 13.6z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_2_48">
            <path fill="#fff" d="M0 0H500.7V130H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
  }

function AddPhoto({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            fill="none"
            viewBox="0 0 20 19"
            {...props}
        >
            <g
                fill="#fff"
                clipPath="url(#clip0_416_185)">

                <path d="M8.691 19c-2.019 0-4.033.006-6.052 0-1.295-.006-2.329-.884-2.585-2.192A3.278 3.278 0 010 16.196v-8.86c0-1.631 1.132-2.804 2.7-2.81h1.322c.266 0 .49-.09.675-.289l.69-.719c.512-.527 1.133-.799 1.851-.804 1.045-.012 2.09-.006 3.14 0 .539 0 .93.396.93.912 0 .52-.396.9-.935.9-1.012 0-2.025.006-3.037 0a.976.976 0 00-.767.329c-.213.232-.43.453-.648.674a2.59 2.59 0 01-1.888.816c-.447.005-.898 0-1.345 0-.604 0-.952.362-.952.985v8.883c0 .606.354.986.936.986h12.044c.582 0 .93-.374.93-.986 0-2.034 0-4.073.006-6.107 0-.147.01-.3.054-.436a.857.857 0 01.963-.6c.387.056.697.413.724.827.011.18.006.368.006.55v5.789c0 1.399-.887 2.498-2.204 2.736-.175.034-.354.028-.528.028H8.69z"></path>
                <path d="M8.702 16.287c-2.4 0-4.343-2.017-4.348-4.51C4.348 9.273 6.296 7.24 8.696 7.24c2.406 0 4.349 2.028 4.343 4.532 0 2.503-1.937 4.515-4.337 4.515zm-2.607-4.515c.005 1.495 1.176 2.713 2.607 2.707 1.431 0 2.607-1.229 2.607-2.713 0-1.501-1.176-2.72-2.623-2.713-1.448.01-2.596 1.217-2.591 2.719zM17.393 4.526c0 .612.006 1.201 0 1.796-.005.414-.24.748-.593.872-.571.199-1.132-.226-1.148-.883-.011-.51 0-1.02 0-1.524v-.26h-1.699c-.522-.006-.908-.392-.908-.907 0-.499.38-.895.892-.906.523-.012 1.045 0 1.568-.006.038 0 .081-.006.147-.011V2.47c0-.504-.006-1.003 0-1.507.005-.56.375-.969.87-.969.501 0 .866.408.871.97v1.733c.087.005.158.01.229.01h1.447c.545.007.931.38.937.902 0 .526-.392.906-.948.912-.55.005-1.099.005-1.665.005z"></path>
            </g>
            <defs>
                <clipPath id="clip0_416_185">
                    <path fill="#fff" d="M0 0H20V19H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

function Waves({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            {...props}
        >
            <path
                fill="#FBF3F5"
                fill-opacity="1"
                d="M0,224L60,202.7C120,181,240,139,360,117.3C480,96,600,96,720,117.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
        </svg>
    );
}

function NotifBadge({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="134"
            height="110"
            fill="none"
            viewBox="0 0 134 110"
            {...props}
        >
            <circle cx="63.98" cy="36.853" r="49.069" fill="#fff"></circle>
            <path
                fill="#FF205B"
                fillOpacity="0.12"
                d="M71.686-14.665l-17.183-5.826L39.827-9.824 22.502-4.438l-5.6 17.256L6.055 27.356l5.61 17.252-.232 18.14 14.675 10.66L36.582 88.22l18.142-.003 17.184 5.826 14.676-10.667 17.325-5.387 5.6-17.256 10.847-14.538-5.61-17.252.232-18.14L100.302.146 89.829-14.669l-18.142.004zm13.146 9.652L93.34 7.023l11.92 8.657-.182 14.734 4.551 14.014-8.811 11.807-4.549 14.02-14.08 4.376-11.915 8.666-13.95-4.736-14.745.005-8.508-12.037-11.92-8.656.192-14.736-4.57-14.011 8.82-11.809 4.549-14.02 14.08-4.376 11.914-8.665L70.097-5.01l14.735-.003z"
            ></path>
            <path
                fill="#FF205B"
                fillOpacity="0.12"
                d="M34.508 96.94l6.1 40.145 36.728-15.346 39.629 3.743-6.1-40.144-18.818 5.847-17.429 12.667-20.405-6.918-19.705.006z"
            ></path>
        </svg>
    );
}

function NotifGeneral({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="129"
            height="110"
            fill="none"
            viewBox="0 0 129 110"
            {...props}
        >
            <path
                fill="#292E2E"
                fillOpacity="0.12"
                d="M70.678 114.466a18.826 18.826 0 0014.174-22.534l-36.707 8.36a18.823 18.823 0 0022.533 14.174zM48.668-24.356a9.411 9.411 0 10-18.262 4.159 47.06 47.06 0 00-26.51 53.345C6.19 43.224 11.847 89.253.171 101.565l128.475-29.26c-15.855-6.041-30.689-49.98-32.983-60.057-5.058-22.207-25.064-37.15-46.996-36.604z"
            ></path>
        </svg>
    );
}

function AwardPinkWhiteBg({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="none"
            viewBox="0 0 60 60"
            {...props}
        >
            <g clipPath="url(#clip0_544_71)">
                <circle cx="28.5" cy="23.5" r="16.5" fill="#fff"></circle>
                <path
                    fill="#FF205B"
                    d="M31.091 6.176l-5.778-1.959-4.935 3.587-5.826 1.811-1.883 5.803-3.647 4.889 1.886 5.8-.078 6.1 4.935 3.585 3.522 4.981 6.1-.001 5.779 1.959 4.935-3.587 5.825-1.811 1.884-5.803 3.647-4.888-1.886-5.802.078-6.1-4.935-3.584-3.522-4.98h-6.1zm4.42 3.246l2.862 4.047 4.008 2.911-.062 4.955 1.53 4.712-2.962 3.97-1.53 4.715-4.734 1.471-4.006 2.914-4.692-1.592-4.958.001-2.86-4.047-4.009-2.911.065-4.955-1.537-4.711 2.966-3.971 1.53-4.715 4.734-1.471 4.006-2.914 4.695 1.592 4.955-.001z"
                ></path>
                <path
                    fill="#FF205B"
                    d="M18.59 43.705l2.051 13.499 12.35-5.16 13.326 1.259-2.051-13.5-6.328 1.967-5.86 4.26-6.862-2.327-6.626.002z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_544_71">
                    <path
                        fill="#fff"
                        d="M0 0H51.941V51.941H0z"
                        transform="rotate(-8.64 51.646 3.902)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
}


export { Logo, AddPhoto, Waves, NotifBadge, NotifGeneral, AwardPinkWhiteBg };