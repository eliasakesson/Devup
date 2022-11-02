import React from 'react'

export default function Top(props) {
    const styles = {
        background: {
            backgroundImage: "linear-gradient(to left top, #8587fe, #7a86fe, #6d84fe, #5f83fd, #4f82fd, #3d89ff, #278fff, #0095ff, #00a2ff, #00afff, #00bbff, #20c6ff)",
            height: props.height,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15vh 15vw",
        },
        divider: {
            height: "4vw",
            transform: "translateY(-100%) rotate(180deg)",
            width: "100%",
        },
        dividersvg: {
            height: "100%",
            fill: "var(--body-bg)",
            width: "100%",
        },
      }

  return (
    <section>
        <div style={styles.background}>
            {props.children}
        </div>
        <div style={styles.divider}>
            <svg style={styles.dividersvg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
    </section>
  )
}