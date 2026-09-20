document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();
    const speed = 1.2;
    const phases = [
        { n2: [2, 3, 4], n3: [1, 5] },
        { n2: [5, 6], n3: [7, 8, 9] },
    ];
    phases.forEach(({ n2, n3 }, index) => {
        let secondDigit = gsap.utils.random(n2);
        let thirdDigit = gsap.utils.random(n3);
        tl.to(
            ".number-2 .number-wrap",
            {
                duration: speed,
                yPercent: (secondDigit - 1) * -10,
            },
            ">",
        );
        tl.to(
            ".number-3 .number-wrap",
            {
                duration: speed,
                yPercent: (thirdDigit - 1) * -10,
            },
            "<",
        );

        tl.to(
            `.pre-welcome .line:nth-child(${index + 1}) p`,
            {
                duration: speed / 2,
                y: 0,
            },
            "<",
        );

        tl.to(
            ".progress-bar",
            {
                duration: speed,
                width: `${secondDigit * 10 + thirdDigit}%`,
            },
            "<",
        );
    });

    tl.to(
        [".number-2 .number-wrap", ".number-3 .number-wrap"],
        {
            duration: speed,
            yPercent: -90,
        },
        ">",
    );

    tl.to(
        ".progress-bar",
        {
            duration: speed,
            width: "100%",
        },
        "<",
    );

    tl.to(".number-1 .number-wrap", { duration: speed, y: 0 }, "<")
        .to(
            [".number-wrap", ".loading-screen .numbers"],
            {
                duration: speed,
                yPercent: -100,
            },
            ">",
        )
        .to(
            ".percentage",
            {
                duration: speed,
                yPercent: -100,
            },
            "<",
        )
        .to(
            ".pre-welcome .line p",
            {
                duration: speed / 2,
                yPercent: -100,
                stagger: 0.2,
            },
            "<",
        )
        .to(".progress-bar", {
            duration: speed / 1.5,
            height: "100%",
        })
        .to(
            ".welcome .line p",
            {
                duration: speed / 2,
                y: 0,
                stagger: 0.2,
            },
            ">",
        );
});
