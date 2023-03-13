/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

/* Update Checker start */
(async () => { /* This is to prevent "identifier i is already declared errors" */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/gui.js")?.answers?.[0]}`)).then(async x => {
        if (1678747508485 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            function createElement(node, props = {}, ...children) {
                const element = document.createElement(node);
                if (typeof props.style == "object") {
                    let result = "";
                    for (const style in props.style) result += `${style.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)}: ${props.style[style]}; `;
                    props.style = result;
                }
                for (const prop in props) element[prop] = props[prop];
                for (const child of children) element.append(child);
                return element;
            }
            let settings;
            try {
                settings = JSON.parse(localStorage.getItem("JODGUISettings") || "{}");
            } catch {
                localStorage.setItem("JODGUISettings", "{}");
                settings = {};
            }
            let variables, gui, cheatContainer, controls, controlButtons, dragButton, content, tooltip, cheats, headerText;
            const guiWrapper = createElement("div", {
                id: "JODGUI", style: {
                    top: `${(Math.max(10, window.innerHeight - 600) / 2)}px`,
                    left: `${(Math.max(10, window.innerWidth - 1000) / 2)}px`,
                    transform: `scale(${settings.scale})`,
                    position: "fixed", height: "80%", width: "80%", maxHeight: "600px", maxWidth: "1000px", zIndex: "999", display: "block",
                }
            },
            /* // variables.sheet.cssRules[0].style.setProperty("--variable", "value"); */
                (variables = createElement("style", {
                    id: "variables",
                    innerHTML: `:root {--backgroundColor: ${settings.backgroundColor || "rgb(11, 194, 207)"};--infoColor: ${settings.infoColor || "#9a49aa"};--cheatList: ${settings.cheatList || "#9a49aa"};--defaultButton: ${settings.defaultButton || "#9a49aa"};--disabledButton: ${settings.disabledButton || "#A02626"};--enabledButton: ${settings.enabledButton || "#47A547"};--textColor: ${settings.textColor || "white"};--inputColor: ${settings.inputColor || "#7a039d"};--contentBackground: ${settings.contentBackground || "rgb(64, 17, 95)"};}`
                })),
                createElement("style", {
                    innerHTML: `.alertList::-webkit-scrollbar{display:none;}.alertList{-ms-overflow-style: none;scrollbar-width: none;}.contentWrapper::-webkit-scrollbar{display:none;}.contentWrapper{-ms-overflow-style: none;scrollbar-width: none;}.cheatButton{position:relative;display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;cursor:pointer;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:var(--textColor);transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}.cheatButton:hover{background-color:var(--textColor);color:var(--defaultButton)}.cheatInput,select{min-width:200px;padding-block:5px;font-family:Nunito,sans-serif;font-weight:400;font-size:16px;background-color:var(--inputColor);box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px;color:var(--textColor)}.bigButton:hover{filter:brightness(110%);transform:translateY(-2px)}.bigButton:active{transform:translateY(2px)}.cheatList::-webkit-scrollbar{width:10px}.cheatList::-webkit-scrollbar-track{background:var(--cheatList)}.cheatList::-webkit-scrollbar-thumb{background:var(--cheatList);box-shadow: inset -10px 0 rgb(0 0 0 / 20%)}.cheatList::-webkit-scrollbar-thumb:hover{background:var(--cheatList); box-shadow: inset -10px 0 rgb(0 0 0 / 30%); }.scriptButton:hover{filter:brightness(120%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:var(--textColor)}.cheatInput::placeholder{color:var(--textColor)}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px;text-align:center}.scriptButton{align-items: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; margin: 10px; padding: 5px 5px 11px; position: relative; width: 250px; font-family: Nunito, sans-serif; font-weight: 400; color: var(--textColor); box-shadow: inset 0 -6px rgb(0 0 0 / 20%); border-radius: 7px; cursor: pointer; transition: filter .25s;}.tooltip::after {content: "";position: absolute;width: 10px;height: 10px;background-color: inherit;top: -5px;left: 50%;margin-left: -6px;transform: rotate(135deg)}`
                }),
                (gui = createElement("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        outline: "3px solid #3a3a3a",
                        borderRadius: "15px",
                        overflow: "hidden"
                    }
                },
                    createElement("div", {
                        id: "background",
                        style: {
                            display: "block",
                            top: "0",
                            left: "0",
                            height: "100%",
                            overflowY: "hidden",
                            overflowX: "hidden",
                            position: "absolute",
                            width: "100%",
                            background: "var(--backgroundColor)",
                            visibility: "visible"
                        }
                    },
                        createElement("div", {
                            id: "backgroundImage",
                            style: {
                                backgroundImage: "url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)",
                                display: "block",
                                height: "200%",
                                position: "absolute",
                                width: "200%",
                                top: "50%",
                                left: "50%",
                                backgroundPositionX: "-100px",
                                backgroundPositionY: "-100px",
                                backgroundSize: "550px",
                                visibility: "visible",
                                transform: "translate(-50%,-50%) rotate(15deg)",
                                appearance: "none",
                                opacity: "0.175"
                            }
                        })),
                    (controls = createElement("div", {
                        id: "controls",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingBottom: "8px",
                            position: "absolute",
                            left: "220px",
                            top: "0",
                            visibility: "visible",
                            zIndex: "5",
                            height: "52px",
                            width: "335px",
                            background: "var(--infoColor)",
                            boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",
                            borderBottomRightRadius: "10px",
                            color: "var(--textColor)",
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: "700",
                            userSelect: "text"
                        },
                        innerHTML: "Ctrl + E to hide | Ctrl + X for quick disable<br>Click and drag here"
                    })),
                    createElement("div", {
                        id: "credits",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingBottom: "8px",
            /* // flexDirection: "row", */
                            position: "absolute",
                            right: "0",
                            top: "0",
                            visibility: "visible",
                            zIndex: "5",
                            height: "47px",
                            width: "280px",
                            background: "var(--infoColor)",
                            boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",
                            borderBottomLeftRadius: "10px",
                            color: "var(--textColor)",
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: "700",
                            userSelect: "text"
                        },
                        innerHTML: "Created by OneMinesraft2#5372"
                    }),
                    (controlButtons = createElement("div", {
                        id: "controlButtons",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
            /* // paddingBottom: "8px", */
            /* // flexDirection: "row", */
                            position: "absolute",
                            right: "0",
                            bottom: "0",
                            visibility: "visible",
                            zIndex: "5",
                            height: "55px",
                            width: "165px",
                            background: "#none",
            /* // boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)", */
                            borderLeft: "3px solid black",
                            borderTop: "3px solid black",
                            borderTopLeftRadius: "10px",
                            color: "white",
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: "700",
                            userSelect: "text",
                            overflow: "hidden",
                            pointerEvents: "all"
                        }
                    },
                        (dragButton = createElement("button", {
                            style: {
                                height: "55px",
                                width: "55px",
                                fontFamily: "Nunito",
                                color: "white",
                                backgroundColor: "#00a0ff",
                                border: "none",
                                fontSize: "2rem",
            /* // fontWeight: "bolder", */
                                cursor: "move"
                            },
                            innerHTML: "✥"
                        })),
                        createElement("button", {
                            style: {
                                height: "55px",
                                width: "55px",
                                fontFamily: "Nunito",
                                color: "white",
                                backgroundColor: "grey",
                                border: "none",
                                fontSize: "2rem",
                                fontWeight: "bolder",
                                cursor: "pointer"
                            },
                            innerHTML: "-",
                            onclick: (function () {
                                let hidden = false;
                                return () => {
                                    for (let child of [...gui.children]) {
                                        if (child == controlButtons) continue;
                                        if (hidden) child.style.display = child.style._display;
                                        else {
                                            child.style._display = child.style.display;
                                            child.style.display = "none";
                                        }
                                    };
                                    gui.style.height = hidden ? "100%" : "55px";
                                    gui.style.width = hidden ? "100%" : "165px";
                                    guiWrapper.style.top = `${parseInt(guiWrapper.style.top) + (guiWrapper.offsetHeight - 55) * (hidden ? -1 : 1)}px`;
                                    guiWrapper.style.left = `${parseInt(guiWrapper.style.left) + (guiWrapper.offsetWidth - 165) * (hidden ? -1 : 1)}px`;
                                    guiWrapper.style.pointerEvents = hidden ? "unset" : "none";
                                    hidden = !hidden;
                                };
                            })()
                        }),
                        createElement("button", {
                            style: {
                                height: "55px",
                                width: "55px",
                                fontFamily: "Nunito",
                                color: "white",
                                backgroundColor: "red",
                                border: "none",
                                fontSize: "2rem",
                                fontWeight: "bolder",
                                cursor: "pointer"
                            },
                            innerHTML: "X",
                            onclick: close
                        }))),
                    (cheatContainer = createElement("div", {
                        className: "cheatList",
                        style: {
                            overflowY: "scroll",
                            background: "var(--cheatList)",
                            boxShadow: "inset -10px 0 rgb(0 0 0 / 20%)",
                            zIndex: "5",
                            width: "220px",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            height: "100%",
                            fontFamily: "Titan One",
                            color: "var(--textColor)",
                            fontSize: "40px",
                            textAlign: "center",
                            paddingTop: "20px",
                            userSelect: "none",
                            padding: "20px 10px 20px 0",
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "column"
                        },
                        innerHTML: "<span style=\"text-shadow: 1px 1px rgb(0 0 0 / 40%)\">Cheats</span>"
                    },
                        createElement("a", {
                            className: "bigButton",
                            style: {
                                cursor: "pointer",
                                display: "block",
                                fontFamily: "Titan One",
                                margin: "20px auto 10px",
                                position: "relative",
                                transition: ".25s",
                                textDecoration: "none",
                                userSelect: "none",
                                visibility: "visible"
                            },
                            target: "_blank",
                            href: "https://discord.gg/QznzysxvX4",
                            innerHTML: `<div style="background: rgba(0,0,0,.25); border-radius: 5px; display: block; width: 100%; height: 100%; left: 0; top: 0; position: absolute; transform: translateY(2px); width: 100%; transition: transform .6s cubic-bezier(.3,.7,.4,1)"></div>
                <div style="background-color: rgb(11, 194, 207); filter: brightness(.7); position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px;"></div>
                <div style="font-weight: 400; background-color: rgb(11, 194, 207); color: white; display: flex; flex-direction: row; align-items: center; justify-content: center; text-align: center; padding: 5px; border-radius: 5px; transform: translateY(-4px); transition: transform .6s cubic-bezier(.3,.7,.4,1)">
                <div style="font-family: Titan One, sans-serif; color: white; font-size: 26px; text-shadow: 2px 2px rgb(0 0 0 / 20%); height: 40px; padding: 0 15px; display: flex; flex-direction: row; align-items: center; justify-content: center">
                    <svg style="filter: drop-shadow(2px 2px 0 rgb(0 0 0 / 20%))" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 -1 21 16">
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                    </svg>
                    Discord
                </div>
                </div>`
                        }))), createElement("div", {
                            className: "contentWrapper",
                            style: {
                                position: "absolute",
                                left: "220px",
                                top: "70px",
                                overflowY: "scroll",
                                width: "calc(100% - 220px)",
                                height: "calc(100% - 70px)",
                                borderRadius: "7px"
                            }
                        },
                            (content = createElement("div", {
                                id: "content",
                                style: {
                                    position: "absolute",
                                    inset: "27px 50px 50px 50px"
            /* // display: "flex", */
            /* // alignItems: "stretch, */
            /* // margin: "50px", */
            /* // backgroundColor: "#8000ff" */
                                }
                            },
                                (tooltip = createElement("div", {
                                    className: "tooltip",
                                    style: {
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        backgroundColor: "black",
                                        height: "fit-content",
                                        maxWidth: "300px",
                                        zIndex: "5",
                                        borderRadius: "7.5px",
                                        color: "white",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "5px",
                                        paddingInline: "15px",
                                        pointerEvents: "none",
                                        opacity: "0",
                                        textAlign: "center"
                                    },
                                    innerText: "description"
                                })),
                                (cheats = createElement("div", {
                                    style: {
                                        alignItems: "center",
                                        boxSizing: "border-box",
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-evenly",
                                        padding: "20px 5px 20px",
                                        position: "relative",
                                        width: "100%",
                                        fontFamily: "Nunito, sans-serif",
                                        fontWeight: "400",
                                        color: "var(--textColor)",
                                        background: "var(--contentBackground)",
                                        boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)",
                                        borderRadius: "7px"
                                    }
                                },
                                    (headerText = createElement("div", {
                                        className: "headerText",
                                        style: {
                                            boxSizing: "border-box",
                                            display: "block",
                                            height: "45px",
                                            left: "-10px",
                                            padding: "4px 4px 8px",
                                            position: "absolute",
                                            top: "-28px",
                                            backgroundColor: "#ef7426",
                                            boxShadow: "0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)",
                                            borderRadius: "7px"
                                        }
                                    },
                                        createElement("div", {
                                            style: {
                                                alignItems: "center",
                                                boxSizing: "border-box",
                                                display: "flex",
                                                height: "100%",
                                                justifyContent: "center",
                                                padding: "0 15px",
                                                width: "100%",
                                                fontFamily: "Titan One, sans-serif",
                                                fontSize: "26px",
                                                fontWeight: "400",
                                                textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464",
                                                color: "white",
                                                background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)",
                                                borderRadius: "5px"
                                            }
                                        })
                                    ))
                                ))
                            ))
                        )
                ))
            );
            for (const oldGui of document.querySelectorAll("#JODGUI")) oldGui.remove();
            
            document.body.appendChild(guiWrapper);
            
            
            function addMode(mode, img, cheats, nameOnly) {
                const button = createElement("div", {
                    className: "cheatButton",
                    innerHTML: (typeof img == "string" ? `<img style="height: 30px; margin-right: 5px" src="${img}">` : img ? img : "") + mode,
                    onclick: () => setCheats(button.innerText, cheats, nameOnly)
                });
                cheatContainer.appendChild(button);
                return button.onclick;
            }
            async function setCheats(mode, scripts, nameOnly) {
                cheats.innerHTML = "";
                headerText.firstChild.innerText = `${mode}${nameOnly ? "" : " Cheats"}`;
                cheats.append(headerText);
            
                for (let i = 0; i < scripts.length; i++) {
                    let { name, description, type, inputs, enabled, run, element } = scripts[i];
                    if (!element) {
                        const button = createElement("div", {
                            className: "scriptButton",
                            style: { background: type == "toggle" ? enabled ? "var(--enabledButton)" : "var(--disabledButton)" : "var(--defaultButton)" }
                        }, createElement("div", {
                            className: "cheatName",
                            innerHTML: name
                        }));
                        button.dataset.description = description;
                        if (inputs?.length) for (let i = 0; i < inputs.length; i++) {
                            const { name, type, options: opts, min, max, value } = inputs[i];
                            let options;
                            try { options = await (typeof opts == "function" ? opts?.() : opts) } catch { options = [] };
                            if (type == "options" && options?.length) {
                                const select = document.createElement("select");
                                options.forEach(opt => {
                                    const option = document.createElement("option");
                                    option.value = JSON.stringify(opt?.value || opt);
                                    option.innerHTML = opt?.name || opt;
                                    select.appendChild(option);
                                });
                                button.appendChild(select);
                            } else {
                                const input = document.createElement("input");
                                input.classList.add("cheatInput");
                                if (type == "number") {
                                    input.type = "number";
                                    input.min = min;
                                    input.max = max;
                                    input.value = value || (min != null ? min : 0);
                                    window.wafaw = inputs[i]
                                };
                                input.placeholder = name;
                                input.style.textAlign = "center";
                                button.appendChild(input);
                            }
                        };
                        button.onclick = (function ({ target }) {
                            if (target != button && !target.classList.contains("cheatName")) return;
                            run.apply(this, [...button.children].slice(1).map(c => c.type == "number" ? parseInt("0" + c.value) : c.nodeName == "SELECT" ? JSON.parse(c.value) : c.value));
                            if (type == "toggle") button.style.background = this.enabled ? "var(--enabledButton)" : "var(--disabledButton)";
                        }).bind(scripts[i]);
                        scripts[i].element = button;
                    }
                    cheats.appendChild(scripts[i].element);
                };
                /*  scripts
                    {
                        name: "",
                        description: "",
                        type: (null | "toggle"),
                        inputs: type == null && [{
                            name: "",
                            type: ("number" | "string" | "options"),
                            options: type == "options" && [
                                {
                                    name: "",
                                    value: undefined
                                };
                            ]
                        }],
                        enabled: type == "toggle" && Boolean,
                        run: function () {};
                    };
                */
            }
            const Cheats = {
                global: [
                    {
                        name: "Auto Answer (Toggle)",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    const q = (question || pquestion);
                                    try {
                                        if (q.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][q.answers.map((x, i) => q.correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                                        else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                                        else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(q.answers[0])
                                    } catch { }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Highlight Answers (Toggle)",
                        description: "Toggles highlight answers on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const { stateNode: { state, props } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                                        if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                                        else answer.style.backgroundColor = "rgb(189, 15, 38)";
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Auto Sell Dupes On Open",
                        description: "Sells the blook you unlock when you open a pack if you already have one (Doesn't sell Legendaries or rarer)",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = XMLHttpRequest.prototype.open;
                                XMLHttpRequest.prototype._original_open ||= XMLHttpRequest.prototype.open;
                                XMLHttpRequest.prototype.open = function () {
                                    this.addEventListener("load", async function () {
                                        try {
                                            if (this.responseURL !== "https://dashboard.blooket.com/api/users/unlockblook") return;
                                            var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
                                            var { rarity } = webpackJsonp.push([[], { ['rarity']: (_, a, b) => { a.rarity = (blook) => b('MDrD').a[blook].rarity } }, [['rarity']]]);
                                            const { unlockedBlook: blook } = JSON.parse(this.response);
                                            const { data: { name, unlocks } } = await axios.get("https://dashboard.blooket.com/api/users");
                                            if (!unlocks[blook] || ["Legendary", "Chroma", "Mystical"].includes(rarity(blook))) return;
                                            await axios.put("https://dashboard.blooket.com/api/users/sellblook", { name, blook, numSold: 1 });
                                            console.log(`Sold duplicate ${blook}`);
                                        } catch { }
                                    });
                                    XMLHttpRequest.prototype._original_open.apply(this, arguments);
                                }
                            } else {
                                this.enabled = false;
                                XMLHttpRequest.prototype.open = this.data;
                            }
                        }
                    },
                    {
                        name: "Auto Answer",
                        description: "Click the correct answer for you",
                        run: function () {
                            const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            try {
                                if (question.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][(question || pquestion).answers.map((x, i) => (question || pquestion).correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                                else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                                else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0])
                            } catch { }
                        }
                    },
                    {
                        name: "Spam Buy Blooks",
                        description: "Opens a box an amount of times",
                        inputs: [
                            {
                                name: "Box",
                                type: "options",
                                options: () => {
                                    return new Promise(r => {
                                        r(Object.keys(Object.values(webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]).webpack.c).find(x => x?.exports?.a?.Safari)?.exports.a || {}));
                                    });
                                }
                            },
                            {
                                name: "Amount",
                                type: "number"
                            }
                        ],
                        run: function (box, amountToOpen) {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            window.prompt = i.contentWindow.prompt.bind(window);
                            window.confirm = i.contentWindow.confirm.bind(window);
                            i.remove();
                            var webpack = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache);
                            var axios = webpack.find((x) => x.exports?.a?.get).exports.a;
                            box = box.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(' ');
            
                            axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { name, tokens } }) => {
                                let prices = webpack.find(x => x?.exports?.a?.Safari)?.exports?.a || {
                                    Medieval: 15,
                                    Breakfast: 15,
                                    Wonderland: 15,
                                    Space: 20,
                                    Bot: 20,
                                    Aquatic: 20,
                                    Safari: 20,
                                    Dino: 25,
                                    "Ice Monster": 25
                                };
                                let amount = Math.min(Math.floor(tokens / prices[box]), amountToOpen);
                                if (amount == 0) {
                                    if (amountToOpen > 0) alert("You do not have enough tokens!");
                                    return;
                                };
            
                                let alertBlooks = confirm("Would you like to alert blooks upon unlocking?");
                                let blooks = {};
                                let now = Date.now();
                                let error = false;
            
                                for (let i = 0; i < amount; i++) {
                                    await axios.put("https://dashboard.blooket.com/api/users/unlockblook", { name, box }).then(({ data: { unlockedBlook, tokens, isNewBlook } }) => {
                                        blooks[unlockedBlook] ||= 0;
                                        blooks[unlockedBlook]++;
            
                                        let before = Date.now();
            
                                        if (alertBlooks) alert(`${unlockedBlook} (${i + 1}/${amount}) ${isNewBlook ? "NEW! " : ''}${tokens} tokens left`);
            
                                        now += Date.now() - before;
                                    }).catch(e => error = true);
                                    if (error) break;
                                };
                                alert(`(${Date.now() - now}ms) Results:\n${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}`);
                            }).catch(() => alert('There was an error user data!'));
                        }
                    },
                    {
                        name: "Flood Game",
                        description: "Floods a game with a number of fake accounts",
                        inputs: [
                            {
                                name: "Game ID",
                                type: "string"
                            },
                            {
                                name: "Name",
                                type: "string"
                            },
                            {
                                name: "Amount",
                                type: "number"
                            },
                            {
                                name: "Blook",
                                type: "options",
                                options: async () => {
                                    let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                    return Object.keys(Object.values(webpack.c).find(x => x.exports.a?.Chick && x.exports.a?.Elephant).exports.a);
                                }
                            },
                            {
                                name: "Banner",
                                type: "options",
                                options: Object.entries({ Starter: "starter", Chalkboard: "chalkboard", Slime: "slime", Bookshelf: "bookshelf", "Toaster Pastry": "toasterPastry", Theater: "theater", Sushi: "sushi", Workbench: "workbench", Spooky: "spooky", Spiders: "spiders", Coffin: "coffin", Pumpkins: "pumpkins", "Falling Blocks": "fallingBlocks", Racetrack: "racetrack", Harvest: "harvest", Leaves: "leaves", "Fall Picnic": "fallPicnic", "Winter Drive": "winterDrive", "Winter Train": "winterTrain", Ice: "ice", Gifts: "gifts", "Christmas Tree": "christmasTree", "Soccer Field": "soccerField", "Winter Landscape": "winterLandscape", "Football Field": "footballField", "Outer Space": "outerSpace", "Hockey Rink": "hockeyRink", "Music Class": "musicClass", "Ice Cream Sandwich": "iceCreamSandwich", "Science Class": "scienceClass", "Fish Tank": "fishTank", "Art Class": "artClass", Clockwork: "clockwork", "Love Letter": "loveLetter", Farm: "farm", Chocolate: "chocolate", "Tech Chip": "techChip", Fire: "fire", "Orange Ice Pop": "orangeIcePop" }).map(([name, value]) => ({ name, value }))
                            }
                        ],
                        run: async function (id, name, amount, b, bg) {
                            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                            const axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a;
                            const firebase = Object.values(webpack.c).find(x => x.exports?.a?.initializeApp).exports.a;
            
                            for (let i = 1; i <= amount; i++) {
                                (async () => {
                                    const { data: { success, fbToken, fbShardURL } } = await axios.put("https://fb.blooket.com/c/firebase/join", { id, name: `${name}${i}` });
                                    if (!success) return;
                                    const liveApp = firebase.initializeApp({
                                        apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                                        authDomain: "blooket-2020.firebaseapp.com",
                                        projectId: "blooket-2020",
                                        storageBucket: "blooket-2020.appspot.com",
                                        messagingSenderId: "741533559105",
                                        appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                                        measurementId: "G-S3H5NGN10Z",
                                        databaseURL: fbShardURL
                                    }, `${name}${i}`);
                                    const auth = firebase.auth(liveApp);
                                    await auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
                                    await auth.signInWithCustomToken(fbToken).catch(console.error);
                                    await liveApp.database().ref(`${id}/c/${name}${i}`).set({ b, bg });
                                    liveApp.delete();
                                })();
                                await new Promise(r => setTimeout(r, 100));
                            }
                        }
                    },
                    {
                        name: "Get Daily Rewards",
                        description: "Gets max daily tokens and xp",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (!location.href.includes("play.blooket.com")) alert("This cheat only works on play.blooket.com");
                            else {
                                var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
                                axios.post("https://play.blooket.com/api/playersessions/solo", { gameMode: "Factory" }).then(({ data: { t } }) => {
                                    axios.get("https://play.blooket.com/api/users/me").then(({ data: { name } }) => {
                                        axios.put("https://play.blooket.com/api/users/add-rewards", { t, name, addedTokens: 500, addedXp: 300 })
                                            .then(({ data: { dailyReward } }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                            .catch(() => alert('There was an error when adding rewards.'));
                                    }).catch(() => alert('There was an error user data.'));
                                });
                            }
                        }
                    },
                    {
                        name: "Use Any Blook",
                        description: "Allows you to play as any blook",
                        run: function () {
                            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            const blooks = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a;
                            if (location.pathname == "/blooks") stateNode.setState({ blookData: Object.keys(blooks).reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}), allSets: Object.values(blooks).reduce((a, b) => (a.includes(b.set) ? a : a.concat(b.set)), []) });
                            else if (Array.isArray(stateNode.state.unlocks)) stateNode.setState({ unlocks: Object.keys(blooks) });
                            else stateNode.setState({ unlocks: blooks });
                        }
                    },
                    {
                        name: "Every Answer Correct",
                        description: "Sets every answer to be correct",
                        run: function () {
                            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.freeQuestions = stateNode.questions = stateNode.props.client.questions.map(x => ({ ...x, correctAnswers: x.answers }));
                        }
                    },
                    {
                        name: "Highlight Answers",
                        description: "Colors answers to be red or green highlighting the correct ones",
                        run: function () {
                            const { stateNode: { state, props } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                                if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                                else answer.style.backgroundColor = "rgb(189, 15, 38)";
                            });
                        }
                    },
                    {
                        name: "Remove Name Limit",
                        description: "Sets the name limit to 120, which is the actual max name length limit",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            document.querySelector('[class*="nameInput"]').maxLength = 120; /* 120 is the actual limit */
                            alert("Removed name length limit");
                        }
                    },
                    {
                        name: "Remove Random Name",
                        description: "Allows you to put a custom name",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ isRandom: false, client: { name: "" } });
                            document.querySelector('[class*="nameInput"]')?.focus?.();
                        }
                    },
                    {
                        name: "Sell Cheap Duplicates",
                        description: "Sells all of your uncommon to epic dupes (not legendaries+)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            window.confirm = i.contentWindow.confirm.bind(window);
                            i.remove();
                            var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
                            axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { name, unlocks } }) => {
                                let blooks = Object.entries(unlocks).filter(([blook, amount]) => amount > 1 && !["Legendary", "Chroma", "Mystical"].includes(webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a[blook].rarity));
                                if (confirm(`Are you sure you want to sell your uncommon to epic dupes?`)) {
                                    let now = Date.now();
                                    for (const [blook, amount] of blooks) await axios.put("https://dashboard.blooket.com/api/users/sellblook", { name, blook, numSold: amount - 1 });
                                    alert(`(${Date.now() - now}ms) Results:\n${blooks.map(([blook, amount]) => `    ${blook} ${amount - 1}`).join(`\n`)}`);
                                }
                            }).catch(() => alert('There was an error user data!'));
                        }
                    },
                    {
                        name: "Sell Duplicate Blooks",
                        description: "Sell all duplicate blooks leaving you with 1 each",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            window.confirm = i.contentWindow.confirm.bind(window);
                            i.remove();
                            var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
                            axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { name, unlocks } }) => {
                                let blooks = Object.entries(unlocks).filter(x => x[1] > 1);
                                if (confirm(`Are you sure you want to sell your dupes?`)) {
                                    let now = Date.now();
                                    for (const [blook, amount] of blooks) await axios.put("https://dashboard.blooket.com/api/users/sellblook", { name, blook, numSold: amount - 1 });
                                    alert(`(${Date.now() - now}ms) Results:\n${blooks.map(([blook, amount]) => `    ${blook} ${amount - 1}`).join(`\n`)}`);
                                }
                            }).catch(() => alert('There was an error user data!'));
                        }
                    },
            /* // { */
            /* //     name: "Enable Limited Gamemodes", */
            /* //     description: "Allows you to host gamemodes like Santa's Workshop", */
            /* //     run: function () { */
            /* //         let data = Object.values(window.webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]).webpack.c).find(x => x.exports.a?.Gold).exports; */
            /* //         data.a = Object.assign({ */
            /* //             Toy: { */
            /* //                 name: "Santa's Workshop", */
            /* //                 img: "https://media.blooket.com/image/upload/v1607057672/Media/santasWorkshop.jpg", */
            /* //                 desc: "Super Snowy, Chilly, and Rapid-fire Fun!", */
            /* //                 detail: "Get in the Holiday spirit by answering questions to build toys and take them from other players", */
            /* //                 focus: "Speed & Holiday Cheer", */
            /* //                 limit: "Player Limit: 60 (300 for Plus)", */
            /* //                 suggest: "3+ players suggested", */
            /* //                 methods: ["Host"], */
            /* //                 limited: !0, */
            /* //                 plusOnly: !1, */
            /* //                 active: true */
            /* //             } */
            /* //         }, data.a); */
            /* //         Object.values(data.a).forEach(x => (x.active = true, x.plusOnly = false)); */
            /* //         Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.forceUpdate(); */
            /* //     } */
            /* // }, */
                    {
                        name: "Simulate Pack",
                        description: "Simulate opening a pack",
                        inputs: [{
                            name: "Pack",
                            type: "options",
                            options: async () => {
                                return Array.from(document.querySelectorAll('[class*="packShadow"]')).map(x => x.alt);
                            }
                        }],
                        run: (function () {
                            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                            let phaser = Object.values(webpack.c).find(x => x.exports?.Class).exports;
                            let scene = {};
                            class Particles extends phaser.Scene {
                                constructor(rarity) {
                                    super();
                                    this.rarity = rarity.toLowerCase();
                                }
                                preload() {
                                    switch (this.rarity) {
                                        case "uncommon":
                                            this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", { width: 25, height: 25 });
                                            this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", { width: 25, height: 25 });
                                            this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", { width: 25, height: 25 });
                                            this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", { width: 30, height: 30 });
                                            this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", { width: 30, height: 30 });
                                            this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", { width: 30, height: 30 });
                                            this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", { width: 30, height: 30 });
                                            break;
                                        case "rare":
                                            this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", { width: 25, height: 25 });
                                            this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", { width: 25, height: 25 });
                                            this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", { width: 30, height: 30 });
                                            this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", { width: 30, height: 30 });
                                            this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", { width: 30, height: 30 });
                                            this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", { width: 30, height: 30 });
                                            this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", { width: 25, height: 25 });
                                            break;
                                        case "epic":
                                            this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", { width: 25, height: 25 });
                                            this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", { width: 25, height: 25 });
                                            this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", { width: 30, height: 30 });
                                            this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", { width: 30, height: 30 });
                                            this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", { width: 30, height: 30 });
                                            this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", { width: 30, height: 30 });
                                            this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", { width: 25, height: 25 });
                                            break;
                                        case "legendary":
                                            this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", { width: 25, height: 25 });
                                            this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", { width: 25, height: 25 });
                                            this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", { width: 25, height: 25 });
                                            this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", { width: 30, height: 30 });
                                            this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", { width: 30, height: 30 });
                                            this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", { width: 25, height: 25 });
                                            this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", { width: 30, height: 30 });
                                            break;
                                        case "chroma":
                                            this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", { width: 25, height: 25 });
                                            this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", { width: 25, height: 25 });
                                            this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", { width: 30, height: 30 });
                                            this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", { width: 30, height: 30 });
                                            this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", { width: 30, height: 30 });
                                            this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", { width: 30, height: 30 });
                                            this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", { width: 25, height: 25 });
                                    }
                                }
                                create() {
                                    scene.scene = this;
                                    scene.rarity = "";
                                    scene.particles = this.physics.add.group({
                                        classType: new phaser.Class({
                                            Extends: phaser.GameObjects.Image,
                                            initialize: function () {
                                                phaser.GameObjects.Image.call(this, scene.scene, 0, 0, "uncommon-1");
                                                this.setDepth(3);
                                                this.lifespan = 0;
                                            },
                                            spawn: function (x, y, scale, velAngle, velSpeed, gravity, angle, lifespan, texture) {
                                                this.setTexture(texture);
                                                this.setActive(true);
                                                this.setVisible(true);
                                                this.setPosition(x, y);
                                                this.setScale(scale);
                                                this.targets = [];
                                                scene.scene.physics.velocityFromAngle(velAngle, velSpeed, this.body.velocity);
                                                this.body.setGravityY(gravity);
                                                this.body.setAngularVelocity(angle);
                                                this.lifespan = lifespan;
                                            },
                                            update: function (t, s) {
                                                this.lifespan -= s;
                                                if (this.lifespan > 0) return;
                                                this.setActive(!1);
                                                this.setVisible(!1);
                                            }
                                        }),
                                        runChildUpdate: !0
                                    });
                                    this.nextParticle = 0;
                                    this.numExplosions = 0;
                                    this.game.events.on("start-particles", (t) => {
                                        scene.rarity = t;
                                        this.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1;
                                    });
                                }
                                update(e, t) {
                                    const I = webpack("74sb");
                                    let Z = function (e) {
                                        switch (e) {
                                            case "center": {
                                                var t = Object(I.l)(-115, -65);
                                                return {
                                                    x: scene.scene.cameras.main.worldView.width / 2,
                                                    y: scene.scene.cameras.main.worldView.height / 2,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: t,
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 700,
                                                    angVelocity: (t > -90 ? 1 : -1) * Object(I.l)(125, 175),
                                                    lifespan: 2500
                                                }
                                            }
                                            case "right-bottom": return {
                                                x: scene.scene.cameras.main.worldView.width,
                                                y: scene.scene.cameras.main.worldView.height,
                                                scale: Object(I.l)(.7, 1),
                                                angle: Object(I.l)(-160, -110),
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 500,
                                                angVelocity: Object(I.l)(-175, -125),
                                                lifespan: 2500
                                            };
                                            case "left-bottom": return {
                                                x: 0,
                                                y: scene.scene.cameras.main.worldView.height,
                                                scale: Object(I.l)(.7, 1),
                                                angle: Object(I.l)(-70, -20),
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 500,
                                                angVelocity: Object(I.l)(125, 175),
                                                lifespan: 2500
                                            };
                                            case "top": return {
                                                x: Object(I.l)(0, scene.scene.cameras.main.worldView.width),
                                                y: -50,
                                                scale: Object(I.l)(.7, 1),
                                                angle: 90,
                                                velocity: Object(I.l)(0, 50),
                                                gravity: 700,
                                                angVelocity: Object(I.l)(-150, 150),
                                                lifespan: 2500
                                            };
                                            case "right-shower": return {
                                                x: scene.scene.cameras.main.worldView.width,
                                                y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                                scale: Object(I.l)(.7, 1),
                                                angle: Object(I.l)(-180, -130),
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 500,
                                                angVelocity: Object(I.l)(-175, -125),
                                                lifespan: 2500
                                            };
                                            case "left-shower": return {
                                                x: 0,
                                                y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                                scale: Object(I.l)(.7, 1),
                                                angle: Object(I.l)(-50, 0),
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 500,
                                                angVelocity: Object(I.l)(125, 175),
                                                lifespan: 2500
                                            };
                                            case "right-diamond": {
                                                var a = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                                return {
                                                    x: scene.scene.cameras.main.worldView.width,
                                                    y: a,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: a > scene.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 0,
                                                    angVelocity: Object(I.l)(-175, -125),
                                                    lifespan: 2500
                                                }
                                            }
                                            case "left-diamond": {
                                                var n = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                                return {
                                                    x: 0,
                                                    y: n,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: n > scene.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 0,
                                                    angVelocity: Object(I.l)(125, 175),
                                                    lifespan: 2500
                                                }
                                            }
                                            default: return {};
                                        }
                                    };
                                    if (scene.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                        switch (scene.rarity) {
                                            case "Uncommon": {
                                                for (let i = 0; i < 2; i++) {
                                                    let n = scene.particles.get();
                                                    n && n.spawn.apply(n, Object.values(Z("center")).concat(`uncommon-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                            case "Rare": {
                                                for (var o = 0; o < 2; o++) {
                                                    var r = scene.particles.get();
                                                    r && r.spawn.apply(r, Object.values(Z(o % 2 == 0 ? "left-bottom" : "right-bottom")).concat(`rare-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                            case "Epic": {
                                                for (var s = 0; s < 2; s++) {
                                                    var i = scene.particles.get();
                                                    i && i.spawn.apply(i, Object.values(Z(s % 2 == 0 ? "left-shower" : "right-shower")).concat(`epic-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                            case "Legendary": {
                                                for (var l = 0; l < 3; l++) {
                                                    var c = scene.particles.get();
                                                    c && c.spawn.apply(c, Object.values(Z("top")).concat(`legendary-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                            case "Chroma": {
                                                for (var u = 0; u < 3; u++) {
                                                    var d = scene.particles.get();
                                                    d && d.spawn.apply(d, Object.values(Z(u % 2 == 0 ? "left-diamond" : "right-diamond")).concat(`chroma-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                        }
                                        this.nextParticle = 20;
                                        this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0));
                                    }
                                }
                            }
                            return function (box) {
                                if (window.location.pathname !== "/market") return alert("This must be ran on the market page");
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                let packs = webpack('fGzD');
                                packs = Object.keys(packs.a).reduce((obj, pack) => (obj.packs.includes(pack) && (obj.data[pack] = Object.fromEntries(packs.b(pack))), obj), { packs: Array.from(document.querySelectorAll('[class*="packShadow"]')).map(x => x.alt), data: {} }).data;
                                if (packs[box]) {
                                    function weighted(pack) {
                                        let weights = [];
                                        const items = Object.keys(packs[pack]);
                                        for (const key of items) weights.push(packs[pack][key] + (weights[items.indexOf(key) - 1] || 0));
                                        const choice = weights[weights.length - 1] * Math.random();
                                        return items[weights.findIndex(w => w >= choice)];
                                    }
                                    const blook = weighted(box);
                                    const allBlooks = Object.values(webpack.c).find(x => x.exports?.a?.Elephant).exports.a;
                                    stateNode.setState({
                                        loadingPack: false,
                                        openPack: true,
                                        unlockedBlook: blook,
                                        tokens: stateNode.state.tokens,
                                        newUnlock: true,
                                        game: {
                                            type: phaser.WEBGL,
                                            parent: "phaser-market",
                                            width: "100%",
                                            height: "100%",
                                            scale: { mode: phaser.Scale.NONE, autoCenter: phaser.Scale.CENTER_BOTH },
                                            transparent: true,
                                            physics: { default: "arcade" },
                                            scene: new Particles(allBlooks[blook].rarity)
                                        },
                                        canOpen: true
                                    });
                                } else alert("I couldn't find that box!");
                            }
                        })()
                    },
                    {
                        name: "Simulate Unlock",
                        description: "Simulate unlocking most of the blooks",
                        inputs: [
                            {
                                name: "Blook",
                                type: "options",
                                options: async () => {
                                    let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                    return Object.keys(Object.entries(Object.values(webpack.c).find(x => Object.values(x.exports?.a || {})[0]?.set).exports.a).reduce((a, b) => (Object.values(webpack.c).find(x => x.exports.a?.Breakfast == 15).exports.a[b[1].realSet || b[1].set] && (a[b[0]] = b[1]), a), {}));
                                }
                            }
                        ],
                        run: (function () {
                            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                            let phaser = Object.values(webpack.c).find(x => x.exports?.Class).exports;
                            let scene = {};
                            class Particles extends phaser.Scene {
                                constructor(rarity) {
                                    super();
                                    this.rarity = rarity.toLowerCase();
                                }
                                preload() {
                                    switch (this.rarity) {
                                        case "uncommon":
                                            this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", { width: 25, height: 25 });
                                            this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", { width: 25, height: 25 });
                                            this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", { width: 25, height: 25 });
                                            this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", { width: 30, height: 30 });
                                            this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", { width: 30, height: 30 });
                                            this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", { width: 30, height: 30 });
                                            this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", { width: 30, height: 30 });
                                            break;
                                        case "rare":
                                            this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", { width: 25, height: 25 });
                                            this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", { width: 25, height: 25 });
                                            this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", { width: 30, height: 30 });
                                            this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", { width: 30, height: 30 });
                                            this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", { width: 30, height: 30 });
                                            this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", { width: 30, height: 30 });
                                            this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", { width: 25, height: 25 });
                                            break;
                                        case "epic":
                                            this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", { width: 25, height: 25 });
                                            this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", { width: 25, height: 25 });
                                            this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", { width: 30, height: 30 });
                                            this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", { width: 30, height: 30 });
                                            this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", { width: 30, height: 30 });
                                            this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", { width: 30, height: 30 });
                                            this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", { width: 25, height: 25 });
                                            break;
                                        case "legendary":
                                            this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", { width: 25, height: 25 });
                                            this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", { width: 25, height: 25 });
                                            this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", { width: 25, height: 25 });
                                            this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", { width: 30, height: 30 });
                                            this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", { width: 30, height: 30 });
                                            this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", { width: 25, height: 25 });
                                            this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", { width: 30, height: 30 });
                                            break;
                                        case "chroma":
                                            this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", { width: 25, height: 25 });
                                            this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", { width: 25, height: 25 });
                                            this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", { width: 30, height: 30 });
                                            this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", { width: 30, height: 30 });
                                            this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", { width: 30, height: 30 });
                                            this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", { width: 30, height: 30 });
                                            this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", { width: 25, height: 25 });
                                    }
                                }
                                create() {
                                    scene.scene = this;
                                    scene.rarity = "";
                                    scene.particles = this.physics.add.group({
                                        classType: new phaser.Class({
                                            Extends: phaser.GameObjects.Image,
                                            initialize: function () {
                                                phaser.GameObjects.Image.call(this, scene.scene, 0, 0, "uncommon-1");
                                                this.setDepth(3);
                                                this.lifespan = 0;
                                            },
                                            spawn: function (x, y, scale, velAngle, velSpeed, gravity, angle, lifespan, texture) {
                                                this.setTexture(texture);
                                                this.setActive(true);
                                                this.setVisible(true);
                                                this.setPosition(x, y);
                                                this.setScale(scale);
                                                this.targets = [];
                                                scene.scene.physics.velocityFromAngle(velAngle, velSpeed, this.body.velocity);
                                                this.body.setGravityY(gravity);
                                                this.body.setAngularVelocity(angle);
                                                this.lifespan = lifespan;
                                            },
                                            update: function (t, s) {
                                                this.lifespan -= s;
                                                if (this.lifespan > 0) return;
                                                this.setActive(!1);
                                                this.setVisible(!1);
                                            }
                                        }),
                                        runChildUpdate: !0
                                    });
                                    this.nextParticle = 0;
                                    this.numExplosions = 0;
                                    this.game.events.on("start-particles", (t) => {
                                        scene.rarity = t;
                                        this.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1;
                                    });
                                }
                                update(e, t) {
                                    const I = webpack("74sb");
                                    let Z = function (e) {
                                        switch (e) {
                                            case "center": {
                                                var t = Object(I.l)(-115, -65);
                                                return {
                                                    x: scene.scene.cameras.main.worldView.width / 2,
                                                    y: scene.scene.cameras.main.worldView.height / 2,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: t,
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 700,
                                                    angVelocity: (t > -90 ? 1 : -1) * Object(I.l)(125, 175),
                                                    lifespan: 2500
                                                }
                                            }
                                            case "right-bottom": return {
                                                x: scene.scene.cameras.main.worldView.width,
                                                y: scene.scene.cameras.main.worldView.height,
                                                scale: Object(I.l)(.7, 1),
                                                angle: Object(I.l)(-160, -110),
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 500,
                                                angVelocity: Object(I.l)(-175, -125),
                                                lifespan: 2500
                                            };
                                            case "left-bottom": return {
                                                x: 0,
                                                y: scene.scene.cameras.main.worldView.height,
                                                scale: Object(I.l)(.7, 1),
                                                angle: Object(I.l)(-70, -20),
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 500,
                                                angVelocity: Object(I.l)(125, 175),
                                                lifespan: 2500
                                            };
                                            case "top": return {
                                                x: Object(I.l)(0, scene.scene.cameras.main.worldView.width),
                                                y: -50,
                                                scale: Object(I.l)(.7, 1),
                                                angle: 90,
                                                velocity: Object(I.l)(0, 50),
                                                gravity: 700,
                                                angVelocity: Object(I.l)(-150, 150),
                                                lifespan: 2500
                                            };
                                            case "right-shower": return {
                                                x: scene.scene.cameras.main.worldView.width,
                                                y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                                scale: Object(I.l)(.7, 1),
                                                angle: Object(I.l)(-180, -130),
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 500,
                                                angVelocity: Object(I.l)(-175, -125),
                                                lifespan: 2500
                                            };
                                            case "left-shower": return {
                                                x: 0,
                                                y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                                scale: Object(I.l)(.7, 1),
                                                angle: Object(I.l)(-50, 0),
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 500,
                                                angVelocity: Object(I.l)(125, 175),
                                                lifespan: 2500
                                            };
                                            case "right-diamond": {
                                                var a = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                                return {
                                                    x: scene.scene.cameras.main.worldView.width,
                                                    y: a,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: a > scene.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 0,
                                                    angVelocity: Object(I.l)(-175, -125),
                                                    lifespan: 2500
                                                }
                                            }
                                            case "left-diamond": {
                                                var n = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                                return {
                                                    x: 0,
                                                    y: n,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: n > scene.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 0,
                                                    angVelocity: Object(I.l)(125, 175),
                                                    lifespan: 2500
                                                }
                                            }
                                            default: return {};
                                        }
                                    };
                                    if (scene.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                        switch (scene.rarity) {
                                            case "Uncommon": {
                                                for (let i = 0; i < 2; i++) {
                                                    let n = scene.particles.get();
                                                    n && n.spawn.apply(n, Object.values(Z("center")).concat(`uncommon-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                            case "Rare": {
                                                for (var o = 0; o < 2; o++) {
                                                    var r = scene.particles.get();
                                                    r && r.spawn.apply(r, Object.values(Z(o % 2 == 0 ? "left-bottom" : "right-bottom")).concat(`rare-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                            case "Epic": {
                                                for (var s = 0; s < 2; s++) {
                                                    var i = scene.particles.get();
                                                    i && i.spawn.apply(i, Object.values(Z(s % 2 == 0 ? "left-shower" : "right-shower")).concat(`epic-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                            case "Legendary": {
                                                for (var l = 0; l < 3; l++) {
                                                    var c = scene.particles.get();
                                                    c && c.spawn.apply(c, Object.values(Z("top")).concat(`legendary-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                            case "Chroma": {
                                                for (var u = 0; u < 3; u++) {
                                                    var d = scene.particles.get();
                                                    d && d.spawn.apply(d, Object.values(Z(u % 2 == 0 ? "left-diamond" : "right-diamond")).concat(`chroma-${Object(I.m)(1, 8)}`))
                                                }
                                                break;
                                            }
                                        }
                                        this.nextParticle = 20;
                                        this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0));
                                    }
                                }
                            }
                            return function (blook) {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                if (window.location.pathname == "/market") {
                                    let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    stateNode.setState({
                                        loadingPack: false,
                                        openPack: true,
                                        unlockedBlook: blook,
                                        tokens: stateNode.state.tokens,
                                        newUnlock: true,
                                        game: {
                                            type: phaser.WEBGL,
                                            parent: "phaser-market",
                                            width: "100%",
                                            height: "100%",
                                            scale: {
                                                mode: phaser.Scale.NONE,
                                                autoCenter: phaser.Scale.CENTER_BOTH
                                            },
                                            transparent: true,
                                            physics: {
                                                default: "arcade"
                                            },
                                            scene: new Particles(Object.entries(Object.values(webpack.c).find(x => Object.values(x.exports?.a || {})[0]?.set).exports.a).reduce((a, b) => (Object.values(webpack.c).find(x => x.exports.a?.Breakfast == 15).exports.a[b[1].set] && (a[b[0]] = b[1]), a), {})[blook].rarity)
                                        },
                                        canOpen: true
                                    });
                                } else alert("This can only be ran on the market page!");
                            }
                        })()
                    },
                    {
                        name: "Unlock Plus Gamemodes",
                        description: "Allows you to play any gamemode that is plus only",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState(state => (state.gameModes.forEach(gm => gm.plusOnly = false), state));
                        }
                    }
                ],
                brawl: [
                    {
                        name: "Double Enemy XP",
                        description: "Doubles enemy XP drop value",
                        run: function () {
                            for (const collider of Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) {
                                const enemies = collider.object2;
                                let _start = enemies.classType.prototype.start;
                                enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.val *= 2 }
                                enemies.children.entries.forEach(e => e.val *= 2);
                            }
                        }
                    },
                    {
                        name: "Half Enemy Speed",
                        description: "Makes enemies move 2x slower",
                        run: function () {
                            for (const collider of Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) {
                                const enemies = collider.object2;
                                let _start = enemies.classType.prototype.start;
                                enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.speed *= .5 }
                                enemies.children.entries.forEach(e => e.speed *= .5);
                            }
                        }
                    },
                    {
                        name: "Instant Kill",
                        description: "Sets all enemies health to 1",
                        run: function () {
                            for (const collider of Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) {
                                const enemies = collider.object2;
                                let _start = enemies.classType.prototype.start;
                                enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.hp = 1 }
                                enemies.children.entries.forEach(e => e.hp = 1);
                            }
                        }
                    },
                    {
                        name: "Invincibility",
                        description: "Makes you invincible",
                        run: function () {
                            for (const collider of Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) collider.collideCallback = () => { };
                        }
                    },
                    {
                        name: "Magnet",
                        description: "Pulls all xp towards you",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('magnetTime')).collideCallback({ active: true }, { active: true, setActive() { }, setVisible() { } });
                        }
                    },
                    {
                        name: "Max Current Abilities",
                        description: "Maxes out all your current abilities",
                        run: function () {
                            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            for (const [ability, level] of Object.entries(stateNode.state.abilities)) for (let i = 0; i < (10 - level); i++) stateNode.state.game.scene.game.events.emit("level up", ability, stateNode.state.abilities[ability]++);
                            stateNode.setState({
                                level: stateNode.state.game.scene.level = [1, 3, 5, 10, 15, 25, 35].sort((a, b) => Math.abs(a - stateNode.state.level) - Math.abs(b - stateNode.state.level))[0] - 1
                            });
                        }
                    },
                    {
                        name: "Next Level",
                        description: "Skips to the next level",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            let { object1: player, object2: xp } = stateNode.state.game.scene.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('emit("xp"'));
                            xp.get().spawn(player.x, player.y, ((e) => 1 === e ? 1 : e < 5 ? 5 : e < 10 ? 10 : e < 20 ? 20 : e < 30 ? 30 : e < 40 ? 40 : e < 50 ? 50 : 100)(stateNode.state.level) - stateNode.xp);
                        }
                    },
                    {
                        name: "Remove Obstacles",
                        description: "Removes all rocks and obstacles",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(body => {
                                try {
                                    if (body.gameObject.frame.texture.key.includes("obstacle")) body.gameObject.destroy();
                                } catch { }
                            });
                        }
                    },
                    {
                        name: "Kill Enemies",
                        description: "Kills all current enemies",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                        }
                    },
                    {
                        name: "Reset Health",
                        description: "Resets health and gives invincibility for 3 seconds",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.game.events._events.respawn.fn();
                        }
                    }
                ],
                cafe: [
                    {
                        name: "Max Items",
                        description: "Maxes out items in the shop (Only usable in the shop)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                            else {
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ items: Object.fromEntries(Object.entries(stateNode.state.items).map(x => [x[0], 5])) });
                            }
                        }
                    },
                    {
                        name: "Remove Customers",
                        description: "Skips the current customers (Not usable in the shop)",
                        run: function () {
                            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.state.customers.forEach((customer, i) => Object.keys(customer).length && stateNode.removeCustomer(i, true));
                        }
                    },
                    {
                        name: "Reset Abilities",
                        description: "Resets used abilities in shop (Only usable in the shop)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                            else {
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ abilities: Object.fromEntries(Object.entries(stateNode.state.abilities).map(x => [x[0], 5])) });
                            }
                        }
                    },
                    {
                        name: "Set Cash",
                        description: "Sets cafe cash",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function (cafeCash) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ cafeCash });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    ca: cafeCash
                                }
                            });
                        }
                    },
                    {
                        name: "Stock Food",
                        description: "Stocks all food to 99 (Not usable in the shop)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname !== "/cafe") alert("This can't be run in the shop");
                            else {
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: 99, level: 5 })) });
                            }
                        }
                    }
                ],
                crypto: [
                    {
                        name: "Choice ESP",
                        description: "Shows what each choice will give you",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    let { text } = stateNode.state.choices[0];
                                    let chest = document.querySelector('[class^=styles__feedbackContainer___]');
                                    if (chest.children.length <= 4) {
                                        let choice = document.createElement('div');
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
                                        choice.style.fontSize = "2em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.marginTop = "675px";
                                        choice.innerText = text;
                                        chest.append(choice);
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Password ESP",
                        description: "Highlights the correct password",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { state } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;
                                    if (state.stage == "hack") [...document.querySelector('div[class^=styles__buttonContainer]').children].forEach(button => {
                                        if (button.innerText == state.correctPassword) return;
                                        button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                                        button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                                        button.style.textShadow = "0 0 1px #f33";
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Always Triple",
                        description: "Always get triple crypto",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ choices: [{ type: "mult", val: 3, rate: .075, blook: "Brainy Bot", text: "Triple Crypto" }] }), 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Auto Guess",
                        description: "Automatically guess the correct password",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { state } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;
                                    if (state.stage == "hack") for (const button of document.querySelector('div[class^=styles__buttonContainer]').children) button.innerText == state.correctPassword && button.click();
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Remove Hack",
                        description: "",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ hack: "" });
                        }
                    },
                    {
                        name: "Set Crypto",
                        description: "Sets crypto",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function (amount) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ crypto: amount, crypto2: amount });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    p: stateNode.state.password,
                                    cr: amount
                                }
                            });
                        }
                    },
                    {
                        name: "Set Password",
                        description: "Sets hacking password",
                        inputs: [{
                            name: "Custom Password",
                            type: "string"
                        }],
                        run: function (password) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ password });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    p: password,
                                    cr: stateNode.state.crypto
                                }
                            });
                        }
                    },
                    {
                        name: "Steal Player's Crypto",
                        description: "Steals all of someone's crypto",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                return new Promise(res => stateNode.props.liveGameController._liveApp ? stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players))) : res([]));
                            }
                        }],
                        run: function (target) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (players && Object.keys(players).map(x => x.toLowerCase()).includes(target.toLowerCase())) {
                                    let [player, { cr }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());
                                    stateNode.setState({ crypto: stateNode.state.crypto + cr, crypto2: stateNode.state.crypto + cr });
                                    stateNode.props.liveGameController.setVal({
                                        path: "c/".concat(stateNode.props.client.name),
                                        val: {
                                            b: stateNode.props.client.blook,
                                            p: stateNode.state.password,
                                            cr: stateNode.state.crypto + cr,
                                            tat: `${player}:${cr}`
                                        }
                                    });
                                }
                            });
                        }
                    }
                ],
                defense: [
                    {
                        name: "Earthquake",
                        description: "Shuffles around towers",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({
                                eventName: "Earthquake",
                                event: {
                                    short: "e",
                                    color: "#805500",
                                    icon: "fas fa-mountain",
                                    desc: "All of your towers get mixed up",
                                    rate: .02
                                },
                                buyTowerName: "",
                                buyTower: {}
                            }, () => stateNode.eventTimeout = setTimeout(() => stateNode.setState({ event: {}, eventName: "" }), 6e3));
                            stateNode.tiles.forEach(row => row.forEach((col, i) => col === 3 && (row[i] = 0)));
                            let tiles = stateNode.tiles.flatMap((_, y) => _.map((__, x) => __ === 0 && ({ x, y }))).filter(Boolean).sort(() => .5 - Math.random());
                            stateNode.towers.forEach(tower => {
                                let { x, y } = tiles.shift();
                                tower.move(x, y, stateNode.tileSize);
                                stateNode.tiles[y][x] = 3;
                            });
                        }
                    },
                    {
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.towers.forEach(tower => {
                                tower.range = 100;
                                tower.fullCd = tower.cd = 0;
                                tower.damage = 1e6;
                            });
                        }
                    },
                    {
                        name: "Remove Ducks",
                        description: "Removes ducks",
                        run: function () {
                            let { stateNode: { ducks, tiles } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            ducks.forEach(x => { tiles[x.y][x.x] = 0; });
                            ducks.length = 0;
                        }
                    },
                    {
                        name: "Remove Enemies",
                        description: "Removes all the enemies",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.enemies = stateNode.futureEnemies = [];
                        }
                    },
                    {
                        name: "Remove Obstacles",
                        description: "Lets you place towers anywhere",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.tiles = stateNode.tiles.map(row => row.fill(0));
                        }
                    },
                    {
                        name: "Set Damage",
                        description: "Sets damage",
                        inputs: [{
                            name: "Damage",
                            type: "number"
                        }],
                        run: function (dmg) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.dmg = dmg;
                        }
                    },
                    {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number"
                        }],
                        run: function (round) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ round });
                        }
                    },
                    {
                        name: "Set Tokens",
                        description: "Sets the amount of tokens you have",
                        inputs: [{
                            name: "Tokens",
                            type: "number"
                        }],
                        run: function (tokens) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ tokens });
                        }
                    }
                ],
                defense2: [
                    {
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.towers.forEach(tower => {
                                tower.stats.dmg = 1e6;
                                tower.stats.fireRate = 50;
                                tower.stats.ghostDetect = true;
                                tower.stats.maxTargets = 1e6;
                                tower.stats.numProjectiles &&= 100;
                                tower.stats.range = 100;
                                if (tower.stats.auraBuffs) for (const buff in tower.stats.auraBuffs) tower.stats.auraBuffs[buff] *= 100;
                            });
                        }
                    },
                    {
                        name: "Kill Enemies",
                        description: "Kills all the enemies",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.state.game.scene.enemyQueue.length = 0;
                            stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                        }
                    },
                    {
                        name: "Set Coins",
                        description: "Sets coins",
                        inputs: [{
                            name: "Coins",
                            type: "number"
                        }],
                        run: function (coins) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ coins });
                        }
                    },
                    {
                        name: "Set Health",
                        description: "Sets the amount of health you have",
                        inputs: [{
                            name: "Health",
                            type: "number"
                        }],
                        run: function (health) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ health });
                        }
                    },
                    {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number"
                        }],
                        run: function (round) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ round });
                        }
                    },
                ],
                dinos: [
                    {
                        name: "Auto Choose",
                        description: "Automatically choose the best fossil when excavating",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                    const getFossils = (() => { /* this is for when ben does funny webpack update stuff */
                                        const func = Object.values(webpack('74sb')).find(x => x.toString().includes('rate'));
                                        return () => func([{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }], 3);
                                    })();
                                    try {
                                        let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                        if (stateNode.state.stage === "excavate") {
                                            stateNode.state.choices.length || (stateNode.state.choices = getFossils());
                                            let max = 0, index = -1;
                                            for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                const { type, val } = stateNode.state.choices[i];
                                                const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                                if (value <= max && type != "mult") continue;
                                                max = value, index = i + 1;
                                            }
                                            document.querySelector('div[class^="styles__rockRow"] > div[role="button"]:nth-child(' + index + ')').click();
                                        }
                                    } catch { }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Rock ESP",
                        description: "Shows what is under the rocks",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    const rocks = [...document.querySelector('[class*="rockButton"]').parentElement.children];
                                    if (!rocks.every(element => element.querySelector('div'))) stateNode.setState({
                                        choices: [{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }].sort(() => 0.5 - Math.random()).slice(0, 3)
                                    }, () => {
                                        rocks.forEach((element, index) => {
                                            const rock = stateNode.state.choices[index];
                                            if (element.querySelector('div')) element.querySelector('div').remove();
                                            const choice = document.createElement("div");
                                            choice.style.color = "white";
                                            choice.style.fontFamily = "Macondo";
                                            choice.style.fontSize = "1em";
                                            choice.style.display = "flex";
                                            choice.style.justifyContent = "center";
                                            choice.style.transform = "translateY(25px)";
                                            choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? Object.values(webpack('74sb')).find(x => x.toString().includes('\xd7'))(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                                            element.append(choice);
                                        });
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Set Fossils",
                        description: "Sets the amount of fossils you have",
                        inputs: [{
                            name: "Fossils",
                            type: "number"
                        }],
                        run: function (fossils) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ fossils });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    f: fossils,
                                    ic: stateNode.state.isCheating
                                }
                            });
                        }
                    },
                    {
                        name: "Set Multiplier",
                        description: "Sets fossil multiplier",
                        inputs: [{
                            name: "Multiplier",
                            type: "number"
                        }],
                        run: function (fossilMult) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ fossilMult });
                        }
                    },
                    {
                        name: "Stop Cheating",
                        description: "Undoes cheating so that you can't be caught",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ isCheating: false });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/ic`,
                                val: false
                            });
                        }
                    }
                ],
                doom: [
                    {
                        name: "Fill Deck",
                        description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname == "/tower/map") {
                                const { a: artifacts, c: allCards } = webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache["gvfT"].exports;
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.props.tower.artifacts = Object.keys(artifacts);
                                stateNode.props.tower.cards = Object.entries(allCards).map(([blook, card]) => ({ ...card, blook, strength: 20, charisma: 20, wisdom: 20 }));
                                try { stateNode.props.addTowerNode(); } catch { };
                                stateNode.setState({ showDeck: false });
                            } else alert("You need to be on the map to run this cheat!");
                        }
                    },
                    {
                        name: "Max Cards",
                        description: "Maxes out all the cards in your deck",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname == "/tower/map") {
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.props.tower.cards.forEach(card => {
                                    card.strength = 20;
                                    card.charisma = 20;
                                    card.wisdom = 20;
                                });
                            } else alert("You need to be on the map to run this cheat!");
                        }
                    },
                    {
                        name: "Max Health",
                        description: "Fills the player's health",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname == "/tower/battle") Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ myHealth: 100 });
                            else alert("You need to be in battle to run this cheat!");
                        }
                    },
                    {
                        name: "Max Card Stats",
                        description: "Maxes out player's current card (Only works on attribute select page)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                            else stateNode.setState({ myCard: { ...stateNode.state.myCard, strength: 20, charisma: 20, wisdom: 20 } });
                        }
                    },
                    {
                        name: "Min Enemy Stats",
                        description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                            else stateNode.setState({ enemyCard: { ...stateNode.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } });
                        }
                    },
                    {
                        name: "Set Coins",
                        description: "Try's to set amount of tower coins you have",
                        inputs: [{
                            name: "Coins",
                            type: "number"
                        }],
                        run: function (coins) {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.prompt.bind(window);
                            i.remove();
                            if (window.location.pathname == "/tower/battle") {
                                let coins = parseInt("0" + alert("How many coins would you like?"));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                try { stateNode.props.setTowerCoins(coins); } catch { };
                            } else alert("You need to be in battle to run this cheat!");
                        }
                    }
                ],
                factory: [
                    {
                        name: "Choose Blook",
                        description: "Gives you a blook",
                        inputs: [{
                            name: "Blook",
                            type: "options",
                            options: [{ name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] }, { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] }, { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] }, { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] }, { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] }, { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] }, { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] }, { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] }, { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] }, { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] }, { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] }, { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] }, { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] }, { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] }, { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] }, { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] }, { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] }, { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] }, { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] }, { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] }, { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] }, { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] }, { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] }, { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] }, { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] }, { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] }, { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] }, { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] }, { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] }, { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] }, { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] }, { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] }, { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] }, { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] }, { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] }, { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] }, { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] }, { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] }, { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] }, { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] }, { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] }, { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] }, { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] }, { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] }, { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] }, { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] }, { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] }, { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] }, { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] }, { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] }, { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] }, { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] }, { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] }, { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] }, { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] }, { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] }, { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] }, { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] }, { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] }, { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] }].map(x => ({ name: x.name, value: JSON.stringify(x) }))
                        }],
                        run: function (blook) {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
                            stateNode.chooseBlook(JSON.parse(blook));
                        }
                    },
                    {
                        name: "Free Upgrades",
                        description: "Sets upgrade prices to 0 for all current blooks",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState(state => ({ ...state, blooks: state.blooks.map(blook => ({ ...blook, price: [0, 0, 0, 0] })) }));
                        }
                    },
                    {
                        name: "Max Blooks",
                        description: "Maxes out all your blooks' levels",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.blooks.forEach(blook => blook.level = 4);
                        }
                    },
                    {
                        name: "Remove Glitches",
                        description: "Removes all enemy glitches",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({
                                bits: 0,
                                ads: [],
                                hazards: [],
                                color: "",
                                lol: false,
                                joke: false,
                                slow: false,
                                dance: false,
                                glitch: "",
                                glitcherName: "",
                                glitcherBlook: ""
                            });
                            clearTimeout(stateNode.adTimeout);
                            clearInterval(stateNode.hazardInterval);
                            clearTimeout(stateNode.nightTimeout);
                            clearTimeout(stateNode.glitchTimeout);
                            clearTimeout(stateNode.lolTimeout);
                            clearTimeout(stateNode.jokeTimeout);
                            clearTimeout(stateNode.slowTimeout);
                            clearTimeout(stateNode.danceTimeout);
                            clearTimeout(stateNode.nameTimeout);
                        }
                    },
                    {
                        name: "Send Glitch",
                        description: "Sends a glitch to everyone else playing",
                        inputs: [{
                            name: "Glitch",
                            type: "options",
                            options: Object.entries({ lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" }).map(([value, name]) => ({ name, value }))
                        }],
                        run: function (val) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        }
                    },
                    {
                        name: "Set All MegaBot",
                        description: "Sets all your blooks to maxed out Mega Bots",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({
                                blooks: new Array(10).fill({
                                    name: "Mega Bot",
                                    color: "#d71f27",
                                    class: "🤖",
                                    rarity: "Legendary",
                                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                    time: [5, 5, 3, 3, 3],
                                    price: [7e6, 12e7, 19e8, 35e9],
                                    active: false,
                                    level: 4,
                                    bonus: 5.5
                                })
                            });
                        }
                    },
                    {
                        name: "Set Cash",
                        description: "Sets amount of cash you have",
                        inputs: [{
                            name: "Cash",
                            type: "number"
                        }],
                        run: function (cash) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ cash });
                        }
                    }
                ],
                fishing: [
                    {
                        name: "Frenzy",
                        description: "Sets everyone to frenzy mode",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: stateNode.state.weight,
                                    f: "Frenzy",
                                    s: true
                                }
                            });
                        }
                    },
                    {
                        name: "Remove Distractions",
                        description: "Removes distractions",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ party: "" });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"]
                        }],
                        run: function (f) {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: stateNode.state.weight, f, s: true
                                }
                            });
                            alert(`Sent a ${f} distraction`);
                        }
                    },
                    {
                        name: "Set Lure",
                        description: "Sets fishing lure (range 1 - 5)",
                        inputs: [{
                            name: "Lure (1 - 5)",
                            type: "number",
                            min: 1,
                            max: 5
                        }],
                        run: function (lure) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ lure: Math.max(Math.min(lure - 1, 4), 0) });
                        }
                    },
                    {
                        name: "Set Weight",
                        description: "Sets weight",
                        inputs: [{
                            name: "Weight",
                            type: "number"
                        }],
                        run: function (weight) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ weight, weight2: weight });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: weight,
                                    f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)]
                                }
                            });
                        }
                    }
                ],
                flappy: [
                    {
                        name: "Toggle Ghost",
                        description: "Lets you go through the pipes",
                        type: "toggle",
                        enabled: false,
                        run: function () {
                            this.enabled = !this.enabled;
                            Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x.gameObject.frame.texture.key.startsWith("blook") && (x.checkCollision.none = this.enabled, x.gameObject.setAlpha(this.enabled ? 0.5 : 1)));
                        }
                    },
                    {
                        name: "Set Score",
                        description: "Sets flappy blook score",
                        inputs: [{
                            name: "Score",
                            type: "number"
                        }],
                        run: function (score) {
                            Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.setState({ score });
                        }
                    }
                ],
                gold: [
                    {
                        name: "Always Triple",
                        description: "Always get triple gold",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode._choosePrize ||= stateNode.choosePrize;
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    stateNode.choosePrize = function (i) {
                                        stateNode.state.choices[i] = { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" };
                                        stateNode._choosePrize(i);
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                                stateNode.choosePrize = stateNode._choosePrize || stateNode.choosePrize;
                            }
                        }
                    },
                    {
                        name: "Auto Choose",
                        description: "Automatically picks the option that would give you the most gold",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(async () => {
                                    try {
                                        let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                        if (stateNode.state.stage === "prize") {
                                            const players = Object.entries(await new Promise(r => stateNode.props.liveGameController.getDatabaseVal("c", c => c && r(c))) || []).filter(x => x[0] != stateNode.props.client.name).sort((a, b) => b[1].g - a[1].g)[0]?.[1]?.g || 0;
                                            let max = 0; index = -1;
                                            for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                const { type, val } = stateNode.state.choices[i];
                                                let value = stateNode.state.gold;
                                                switch (type) {
                                                    case "gold": value = stateNode.state.gold + val || stateNode.state.gold; break;
                                                    case "multiply":
                                                    case "divide": value = Math.round(stateNode.state.gold * val) || stateNode.state.gold; break;
                                                    case "swap": value = players || stateNode.state.gold;
                                                    case "take": value = stateNode.state.gold + players * val || stateNode.state.gold;
                                                }
                                                if ((value || 0) <= max) continue;
                                                max = value, index = i + 1;
                                            }
                                            document.querySelector(`div[class^='styles__choice${index}']`).click();
                                        }
                                    } catch { }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Chest ESP",
                        description: "Shows what each chest will give you",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.choices.forEach(({ text }, index) => {
                                        let chest = document.querySelector(`div[class^='styles__choice${index + 1}']`);
                                        if (!chest || chest.querySelector('div')) return;
                                        let choice = document.createElement('div');
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Eczar";
                                        choice.style.fontSize = "2em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.transform = "translateY(200px)";
                                        choice.innerText = text;
                                        chest.append(choice);
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Reset Players Gold",
                        description: "Sets a player's gold to 0",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                return new Promise(res => stateNode.props.liveGameController._liveApp ? stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players))) : res([]));
                            }
                        }],
                        run: function (target) {
                            let { stateNode: { props, state } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            props.liveGameController.setVal({
                                path: "c/".concat(props.client.name),
                                val: {
                                    b: props.client.blook,
                                    g: state.gold,
                                    tat: `${target}:swap:0`
                                }
                            });
                        }
                    },
                    {
                        name: "Set Gold",
                        description: "Sets amount of gold",
                        inputs: [{
                            name: "Gold",
                            type: "number"
                        }],
                        run: function (gold) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ gold, gold2: gold });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    g: gold
                                }
                            });
                        }
                    },
                    {
                        name: "Swap Gold",
                        description: "Swaps gold with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                return new Promise(res => stateNode.props.liveGameController._liveApp ? stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players))) : res([]));
                            }
                        }],
                        run: function (target) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (!players?.[target]) return;
                                let { g } = players[target];
                                stateNode.props.liveGameController.setVal({
                                    path: "c/".concat(stateNode.props.client.name),
                                    val: {
                                        b: stateNode.props.client.blook,
                                        g,
                                        tat: `${target}:swap:${stateNode.state.gold}`
                                    }
                                });
                                stateNode.setState({ gold: g, gold2: g });
                            });
                        }
                    },
                    {
                        name: "Reset All Players' Gold (Testing)",
                        description: "Set's everyone else's gold to 0",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            let { stateNode: { props, state } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            let count = 0;
                            props.liveGameController.getDatabaseVal("c", async (players) => {
                                if (players) for (const player of Object.keys(players)) {
                                    await props.liveGameController.setVal({
                                        path: "c/".concat(props.client.name),
                                        val: {
                                            b: props.client.blook,
                                            g: state.gold,
                                            tat: `${player}:swap:0`
                                        }
                                    });
                                    count++;
                                };
                                alert(`Reset ${count} players' gold!`);
                            });
                        }
                    }
                ],
                kingdom: [
                    {
                        name: "Choice ESP",
                        description: "Shows you what will happen if you say Yes or No",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                let stats = ['materials', 'people', 'happiness', 'gold'];
                                let elements = Object.fromEntries([...document.querySelectorAll('[class^=styles__statContainer]')].map((container, i) => [stats[i], container]));
                                this.data = setInterval(() => {
                                    let { guest: data, phase } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state;
                                    if (phase == "choice") {
                                        Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
                                        Object.entries(data.yes || {}).forEach(x => {
                                            if (x[0] == 'msg' || !stats.includes(x[0])) return;
                                            let element = document.createElement('div');
                                            element.className = 'choiceESP';
                                            element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                                            element.innerText = String(x[1]);
                                            elements[x[0]].appendChild(element);
                                        });
                                        Object.entries(data.no || {}).forEach(x => {
                                            if (x[0] == 'msg' || !stats.includes(x[0])) return;
                                            let element = document.createElement('div');
                                            element.className = 'choiceESP';
                                            element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                                            element.innerText = String(x[1]);
                                            elements[x[0]].appendChild(element);
                                        });
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Disable Tax Toucan",
                        description: "Tax evasion",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE;
                        }
                    },
                    {
                        name: "Max Stats",
                        description: "Sets all resources to the max",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
                        }
                    },
                    {
                        name: "Set Guests",
                        description: "Sets the amount of guests you've seen",
                        inputs: [{
                            name: "Guests",
                            type: "number"
                        }],
                        run: function (guestScore) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ guestScore });
                        }
                    },
                    {
                        name: "Skip Guest",
                        description: "Skips the current guest",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.nextGuest();
                        }
                    }
                ],
                racing: [{
                    name: "Instant Win",
                    description: "Instantly Wins the race",
                    run: function () {
                        const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                        stateNode.setState({ progress: stateNode.state.goalAmount }, () => {
                            const { state: { question } } = stateNode;
                            try {
                                [...document.querySelectorAll(`[class*="answerContainer"]`)][question.answers.map((x, i) => question.correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                            } catch { }
                        });
                    }
                }],
                royale: [
                    {
                        name: "Auto Answer (Toggle)",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Auto Answer",
                        description: "Chooses the correct answer for you",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                        }
                    },
                ],
                rush: [
                    {
                        name: "Set Blooks",
                        description: "Sets amount of blooks you or your team has",
                        inputs: [{
                            name: "Blooks",
                            type: "number"
                        }],
                        run: function (numBlooks) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ numBlooks });
                            stateNode.isTeam ? stateNode.props.liveGameController.setVal({
                                path: `a/${stateNode.props.client.name}/bs`,
                                val: numBlooks
                            }) : stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/bs`,
                                val: numDefense
                            });
                        }
                    },
                    {
                        name: "Set Defense",
                        description: "Sets amount of defense you or your team has (Max 4)",
                        inputs: [{
                            name: "Defense (max 4)",
                            type: "number",
                            max: 4
                        }],
                        run: function (defense) {
                            let numDefense = Math.min(defense, 4);
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ numDefense });
                            stateNode.isTeam ? stateNode.props.liveGameController.setVal({
                                path: `a/${stateNode.props.client.name}/d`,
                                val: numDefense
                            }) : stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/d`,
                                val: numDefense
                            });
                        }
                    }
                ],
                workshop: [
                    {
                        name: "Remove Distractions",
                        description: "Removes all enemy distractions",
                        run: function () {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ fog: !1, dusk: !1, wind: !1, plow: !1, blizzard: !1, force: !1, canada: !1, trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1] });
                        }
                    },
                    {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone else playing",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: Object.entries({ c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" }).map(([value, name]) => ({ name, value }))
                        }],
                        run: function (val) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        }
                    },
                    {
                        name: "Set Toys",
                        description: "Sets amount of toys",
                        inputs: [{
                            name: "Toys",
                            type: "number"
                        }],
                        run: function (toys) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ toys });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    t: toys
                                }
                            });
                        }
                    },
                    {
                        name: "Set Toys Per Question",
                        description: "Sets amount of toys per question",
                        inputs: [{
                            name: "Toys Per Question",
                            type: "number"
                        }],
                        run: function (toysPerQ) {
                            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ toysPerQ });
                        }
                    },
                    {
                        name: "Swap Toys",
                        description: "Swaps toys with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                return new Promise(res => stateNode.props.liveGameController._liveApp ? stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players))) : res([]));
                            }
                        }],
                        run: function (target) {
                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (players && Object.keys(players).map(x => x.toLowerCase()).includes(target.toLowerCase())) {
                                    let [player, { t: toys }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());
                                    stateNode.props.liveGameController.setVal({
                                        path: "c/".concat(stateNode.props.client.name),
                                        val: {
                                            b: stateNode.props.client.blook,
                                            t: toys,
                                            tat: `${player}:swap:${stateNode.state.toys}`
                                        }
                                    });
                                    stateNode.setState({ toys });
                                }
                            });
                        }
                    }
                ],
                settings: [
                    {
                        name: "Import Settings",
                        description: "Import a custom theme",
                        inputs: [
                            {
                                name: "JSON Data",
                                type: "string"
                            }
                        ],
                        run: function (theme) {
                            try {
                                JSON.parse(theme);
                            } catch (e) {
                                return alert("Invalid JSON provided");
                            }
                            theme = { backgroundColor: "rgb(11, 194, 207)", infoColor: "#9a49aa", cheatList: "#9a49aa", defaultButton: "#9a49aa", disabledButton: "#A02626", enabledButton: "#47A547", textColor: "white", inputColor: "#7a039d", contentBackground: "rgb(64, 17, 95)", ...theme }
                            localStorage.setItem("JODGUISettings", theme);
                            theme = JSON.parse(theme);
                            for (const prop in theme) variables.sheet.cssRules[0].style.setProperty(`--${prop}`, theme[prop]);
                        }
                    },
                    {
                        name: "Export Settings",
                        description: "Export the current theme to JSON",
                        run: async function () {
                            await navigator.clipboard.writeText(JSON.stringify(JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), null, 4));
                            prompt("Text copied to clipboard. (Paste below to test)");
                        }
                    },
                    {
                        name: "Defaults",
                        description: "Changes all the settings to a preset",
                        inputs: [
                            {
                                name: "Theme",
                                type: "options",
                                options: [
                                    {
                                        name: "Default",
                                        value: {
                                            backgroundColor: "rgb(11, 194, 207)",
                                            infoColor: "#9a49aa",
                                            cheatList: "#9a49aa",
                                            defaultButton: "#9a49aa",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547",
                                            textColor: "white",
                                            inputColor: "#7a039d",
                                            contentBackground: "rgb(64, 17, 95)"
                                        }
                                    },
                                    {
                                        name: "Blue - Purple",
                                        value: {
                                            backgroundColor: "linear-gradient(162.5deg, rgba(0,183,255,1) 0%, rgba(128,0,255,1) 100%)",
                                            infoColor: "#9a49aa",
                                            cheatList: "#9a49aa",
                                            defaultButton: "#9a49aa",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547",
                                            textColor: "white",
                                            inputColor: "#7a039d",
                                            contentBackground: "rgb(64, 17, 95)"
                                        }
                                    },
                                    {
                                        name: "Blacket",
                                        value: {
                                            backgroundColor: "#4f4f4f",
                                            infoColor: "#2f2f2f",
                                            cheatList: "#2f2f2f",
                                            defaultButton: "#4f4f4f",
                                            disabledButton: "#eb6234",
                                            enabledButton: "#00c20c",
                                            textColor: "white",
                                            inputColor: "#3f3f3f",
                                            contentBackground: "#2f2f2f"
                                        }
                                    }
                                ]
                            }
                        ],
                        run: function (theme) {
                            localStorage.setItem("JODGUISettings", JSON.stringify(theme));
                            for (const prop in theme) variables.sheet.cssRules[0].style.setProperty(`--${prop}`, theme[prop]);
                        }
                    },
                    {
                        name: "Scale",
                        description: "Forces the GUI to scale from 25%-100%",
                        inputs: [
                            {
                                type: "number",
                                name: "Percent scale",
                                min: 25,
                                max: 100,
                                value: (settings.scale || 1) * 100
                            }
                        ],
                        run: function (scale) {
                            scale = Math.min(Math.max(scale, 25), 100);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), scale: scale / 100 }));
                            guiWrapper.style.transform = `scale(${(scale / 100)})`;
                        }
                    },
                    {
                        name: "Background Color",
                        description: "Changes the background color of the GUI",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            variables.sheet.cssRules[0].style.setProperty("--backgroundColor", color);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), backgroundColor: color }));
                        }
                    },
                    {
                        name: "Category List Color",
                        description: "Changes the categories list background color",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            variables.sheet.cssRules[0].style.setProperty("--cheatList", color);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), cheatList: color }));
                        }
                    },
                    {
                        name: "Info Color",
                        description: "Changes the color of the information at the top of the GUI",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            variables.sheet.cssRules[0].style.setProperty("--infoColor", color);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), infoColor: color }));
                        }
                    },
                    {
                        name: "Button Color",
                        description: "Changes the color of the cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            variables.sheet.cssRules[0].style.setProperty("--defaultButton", color);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), defaultButton: color }));
                        }
                    },
                    {
                        name: "Enabled Toggle Color",
                        description: "Changes the color of enabled toggle cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            variables.sheet.cssRules[0].style.setProperty("--enabledButton", color);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), enabledButton: color }));
                        }
                    },
                    {
                        name: "Disabled Toggle Color",
                        description: "Changes the color of disabled toggle cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            variables.sheet.cssRules[0].style.setProperty("--disabledButton", color);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), disabledButton: color }));
                        }
                    },
                    {
                        name: "Text Color",
                        description: "Changes the text color",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            variables.sheet.cssRules[0].style.setProperty("--textColor", color);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), textColor: color }));
                        }
                    },
                    {
                        name: "Input Color",
                        description: "Changes the color of inputs, like the set gold number input",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            variables.sheet.cssRules[0].style.setProperty("--inputColor", color);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), inputColor: color }));
                        }
                    },
                    {
                        name: "Content Color",
                        description: "Changes the background color of the cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            variables.sheet.cssRules[0].style.setProperty("--contentBackground", color);
                            localStorage.setItem("JODGUISettings", JSON.stringify({ ...JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), contentBackground: color }));
                        }
                    }
                ],
                alerts: [
                    {
                        element: createElement("div", {
                            className: "alertContainer",
                            style: {
                                margin: "15px 15px 5px 15px",
                                backgroundColor: "rgb(0 0 0 / 50%)",
                                width: "95%",
                                height: "370px",
                                borderRadius: "7px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        }, createElement("span", {
                            innerText: "Join a game with alerts to use this tab\n(Gold Quest, Crypto Hack, Fishing Frenzy, Deceptive Dinos, Cafe, Factory)",
                            style: { textAlign: "center" }
                        })),
                        addAlert: function (name, blook, message) {
                            return this.element.firstChild.prepend(createElement("li", { style: { margin: "5px 5px 5px 5px" } }, createElement("img", {
                                src: blook,
                                alt: "blook",
                                draggable: false,
                                style: { height: "22.5px", margin: "0 10px -5px 0" }
                            }), createElement("strong", {}, name), " ", message));
                        },
                        connection: null,
                        data: {},
                        async connect() {
                            try {
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                if (!stateNode?.props?.liveGameController?._liveGameCode || !["gold", "hack", "fishing", "dino", "cafe", "factory"].includes(this.getGamemode())) return false;
                                this.element.innerHTML = "";
                                this.element.style.display = "block";
                                this.element.append(createElement("ul", {
                                    className: "alertList",
                                    style: {
                                        margin: "10px 10px 0 10px",
                                        padding: "0",
                                        listStyleType: "none",
                                        display: "flex",
                                        flexDirection: "column-reverse",
                                        height: "355px",
                                        overflowY: "scroll",
                                        wordWrap: "break-word"
                                    }
                                }));
                                this.connection = await stateNode.props.liveGameController.getDatabaseRef("c");
                                const blooks = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find(x => x.exports?.a?.Alice && x.exports?.a?.Alien).exports.a;
                                const gamemode = this.getGamemode();
                                const factoryGlitches = { lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" }
                                this.connection.on("value", snapshot => {
                                    const players = snapshot.val() || {};
                                    if (!players || !this.diffObjects(this.data, players)) return;
                                    const added = this.diffObjects(this.data, players)
                                    this.data = players;
            /* // this.addAlert(`Removed: ${JSON.stringify(removed)}\nAdded: ${JSON.stringify(added)}`); */
                                    switch (gamemode) {
                                        case "gold":
                                            for (const player in added) {
                                                if (!added[player].tat) continue;
                                                const [tat, amount] = added[player].tat.split(':');
                                                if (amount == "swap") this.addAlert(player, blooks[players[player].b]?.url, `just swapped with ${tat}`);
                                                else this.addAlert(player, blooks[players[player].b]?.url, `just took ${amount} gold from ${tat}`);
                                            }
                                            break;
                                        case "hack":
                                            for (const player in added) {
                                                if (!added[player].tat) continue;
                                                const [tat, amount] = added[player].tat.split(':');
                                                this.addAlert(player, blooks[players[player].b]?.url, `just took ${amount} crypto from ${tat}`);
                                            }
                                            break;
                                        case "fishing":
                                            for (const player in added) {
                                                if (added[player].f == "Frenzy") this.addAlert(player, blooks[players[player].b]?.url, `just started a frenzy`);
                                                else if (added[player].s) this.addAlert(player, blooks[players[player].b]?.url, `just sent a ${added[player].f} distraction`);
                                            }
                                            break;
                                        case "dino":
                                            for (const player in added) {
                                                if (!added[player].tat) continue;
                                                const [tat, caught] = added[player].tat.split(':');
                                                if (caught == "true") this.addAlert(player, blooks[players[player].b]?.url, `just caught ${tat} CHEATING!`);
                                                else this.addAlert(player, blooks[players[player].b]?.url, `investigated ${tat}`);
                                            }
                                            break;
                                        case "cafe":
                                            for (const player in added) {
                                                if (!added[player].up) continue;
                                                const [upgrade, level] = added[player].up.split(":");
                                                if (level) this.addAlert(player, blooks[players[player].b]?.url, `upgraded ${upgrade} to level ${level}`);
                                            }
                                            break;
                                        case "factory":
                                            for (const player in added) {
                                                const data = added[player];
                                                if (data.g) this.addAlert(player, blooks[players[player].b]?.url, `activated the ${factoryGlitches[data.g]} glitch!`);
                                                if (data.s) {
                                                    const [amount, synergy] = data.s.split('-')
                                                    this.addAlert(player, blooks[players[player].b]?.url, `has a ${amount} ${synergy} synergy!`);
                                                }
                                                else if (data.t) this.addAlert(player, blooks[players[player].b]?.url, `now has 10 Blooks!`);
                                            }
                                            break;
                                    }
                                });
                            } catch {
                                return false;
                            }
                        },
                        diffObjects(obj1, obj2) {
                            const changed = {};
            
                            for (const key in obj1) {
                                if (!(key in obj2)) continue;
                                if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
                                    const recChanged = this.diffObjects(obj1[key], obj2[key]);
                                    if (recChanged && Object.keys(recChanged).length !== 0) changed[key] = recChanged;
                                } else if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) changed[key] = obj2[key];
                            }
            
                            for (const key in obj2) if (!(key in obj1)) changed[key] = obj2[key];
            
                            if (Object.keys(changed).length == 0) return null;
                            return changed;
                        },
                        getGamemode() {
                            switch (window.location.pathname) {
                                case "/play/racing":
                                    return "racing";
                                case "/play/factory":
                                    return "factory";
                                case "/play/classic/get-ready":
                                case "/play/classic/question":
                                case "/play/classic/answer/sent":
                                case "/play/classic/answer/result":
                                case "/play/classic/standings":
                                    return "classic";
                                case "/play/battle-royale/match/preview":
                                case "/play/battle-royale/question":
                                case "/play/battle-royale/answer/sent":
                                case "/play/battle-royale/answer/result":
                                case "/play/battle-royale/match/result":
                                    return "royale";
                                case "/play/toy":
                                    return "workshop";
                                case "/play/gold":
                                    return "gold";
                                case "/play/brawl":
                                    return "brawl";
                                case "/play/hack":
                                    return "hack";
                                case "/play/fishing":
                                    return "fishing";
                                case "/play/rush":
                                    return "rush";
                                case "/play/dino":
                                    return "dino";
                                case "/tower/map":
                                case "/tower/battle":
                                case "/tower/rest":
                                case "/tower/risk":
                                case "/tower/shop":
                                case "/tower/victory":
                                    return "doom";
                                case "/cafe":
                                case "/cafe/shop":
                                    return "cafe";
                                case "/defense":
                                    return "defense";
                                case "/kingdom":
                                    return "kingdom";
                                default:
                                    return false;
                            }
                        }
                    }
                ]
            };
            
            addMode("Alerts", null, Cheats.alerts, true);
            addMode("Global", "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Games_Played_2.svg", Cheats.global)();
            addMode("Gold Quest", "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg", Cheats.gold);
            addMode("Cafe", "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl1.svg", Cheats.cafe);
            addMode("Crypto Hack", "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg", Cheats.crypto);
            addMode("<span style=\"font-size: 17px\">Deceptive Dinos</span>", [`<img style="height: 30px; margin-left: 8px; margin-right: 12px" src="https://media.blooket.com/image/upload/v1655161325/Media/survivor/Dog.svg">`], Cheats.dinos);
            addMode("<span style=\"font-size: 18px\">Tower Defense</span>", [`<img style="width: 30px; margin-right: 5px" src="https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg">`], Cheats.defense);
            addMode("<span style=\"font-size: 16px\">Tower Defense 2</span>", [`<img style="width: 30px; margin-right: 5px; rotate: 45deg" src="https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg">`], Cheats.defense2);
            addMode("Factory", "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Factory_Upgrades.svg", Cheats.factory);
            addMode("<span style=\"font-size: 19px\">Fishing Frenzy</span>", "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg", Cheats.fishing);
            addMode("Flappy Blook", "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg", Cheats.flappy);
            addMode("<span style=\"font-size: 17px\">Tower of Doom</span>", [`<img style="height: 30px; margin-left: 5px; margin-right: 10px" src="https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg">`], Cheats.doom);
            addMode("<span style=\"font-size: 18px\">Crazy Kingdom</span>", "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl1.svg", Cheats.kingdom);
            addMode("Racing", "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg", Cheats.racing);
            addMode("Battle Royale", "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Bottom.svg", Cheats.royale);
            addMode("Blook Rush", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA7YSURBVHic7Z17tFxVfcc/e59zZib3kcfN456YQObOTB43PBIKoeIqSlwIBXwiCCytXe2qxabSWrAqLKmwXKthVRe2BFxitYpasSIPV0sI8mhV5GHVdpWaoCRIvAnZSW/uzeuG3Nec/jFzk8mYOXNm73PmeT7/zt6/s+/d399vv/cWnufRSSilZgEXAZcBl42MHF5m23KrlPJBKcU9mUx6pLElrC+iEwSglFpOscIpVH5q5rfh4YPH0wkBlmUNW5b8oZTyi9ls+ol6l7XetKUAyrz8ciBbKW2pAMqRUk62e3RoGwH4ebkffgIopV2jQ8sKoOjl6zlR6RW93I+gAiinGB22SSkfklJsatXo0FICUEqt4ESFv4WAXu6HrgBKKYkOPypGh+8bG60TTS0ApVQXJ3t5JuxvhCGAcorR4aVidLg7k0kPh/6RkGg6AUTh5X5EIYBSmj06NFwA9fByP6IWQDnNFh0aIgCl1EpO9vJk3QtRpN4CKKUYHfYXo8O92Wx6S93LUA8BFL38rZyo9IHIPxqQRgqgHCnlVEl02FSP6BCZAIpefjmFCn8zDfRyP5pJAKWURIdnin2HSKJDaAJQSnVzclveNF7uR7MKoJyy6HBPJpPeF4ZdIwEopVZxosKb1sv9aBUBlFIWHb6UzaY3a9uqRQBFLy9ty9O6H24WWlEA5RSjwy+llA8X+w6Bo0NVASilBjlR4RfSgl5+KiY9eP6g4IWhad7Xf4Qu2VzzIboUo8NISXR41De9nwCUUpcAj4ddyEaxaxyeHhU8PQLPHBSMTQP7FoHwWDBrnPPnjXFd/yHW9kw0uqihkUolbsnlBjZW+t2ukl+GXJ66MunBcwcFT48WKv7loxUSeoLhoyk2H02xefd8HHuK5b2v8/sLj3DNosOtHh0svx+rCaDlKPXyHx0UHJ2u3cbklM3W0V62jvZy58tu20YHaAMBTOTh+UMBvFwXn+hw9cLD9FgtHR1aUwBDx4pePlpoy3W8XJfy6DD/eHQ4zDk94/UrSEi0hAAm8vDcjJePCLa/3ugSFfEE+4+meOxoisd2z8dxCtHhkvmFvkMrRIemFcBvSrz8x3X2cl0mJ222jvSydaSXv9/uMr9rnHVzxri2/zDn9jZndGgaATStl+viCfaPpdgylmLLa80bHRoqgFIvf+aA4PV8I0sTLc0aHeoqgBkvf2qkUPE7Wt3LdSmPDvYUudmF6HBtnaND5ALYWdqWt7mX6zI5ZbNtpJdtI738w3aXvlnjrJtXiA7nRTyyiEwAvxiDP31J8kqnerkunmDkaIrHj6Z4vDjvsHHVHi7tC3uCo0BkU737JkRc+SEwOWXz6rgTmf2WnuuPMScWQIcTC6DDiQXQ4cQC6HBiAXQ4sQA6nFgAHU4sgA4nFkCHEwugw4kF0OHEAuhwYgF0OLEAOpxqAtDei2sL3Zwx5SQx2kY16fdjNQFob+mYazfHrtd2YFFCf0+8EOKw3+/VBKC9D2lu02w4b30WJ40ORRzw+zG6CBDdLqaO4w3JKZPsvjdgRBYBeq24HxAKAvodowhgJACjbZ1z4mbAGCHM9tELge8l1pEKIO4HmGNL44MUo34/VhPAEUD7RoR5sQCMSVjGAtjr96OvAFzX9YBdul+e68RDQVOSBgKQUk5mMmlfA0FmAod0CxA3AeZ02SYCEGNV0wSwoy2ABfFQ0Jg5tv4QUAjh2/5DxAI4o1s3Z8wMqw0OhwohVLU0kQpgTU/cBzDlonn6AzEhxM5qaYIIoKqRSmS7oMf3lroYP4TweNNsEwHwUrU0QQTwM90CSOCsHt3cMT3JSaPZVCnFg1XTVEvguu5e4BXdQsTNgD6ndx3TzlscAv5v1XQB7T2rW5A1cQTQZk2vvgAsSwaav4leAL1xBNBl/Tz9W0GklC8EShfQ3nO6BUmnYHY8IVQzQnqcP1t/CCileCRQuoD2XqSwLlAzgrgfoENvckJ7w6YQwhOCh4OkDfQN13WngUAh5VSc26ubs3PJdRu1/6OZTDrQIl4tItPuB7xzQRwBauUPFus/ZWNZ8hdB09ZFAIPdsKpLN3fnkXCmuNhsBjDw87S1COB5QNuVr1wUR4GgrOvT6m4dR0rxjcBpgyZ0XfcAsE2rRMB7FnrEWwSD8eElVRfxKmJZcjyTSQeevq+1o6ndDCxNwrrZurk7h57khNGzNJYlX60lfa0C+GGN6U/iyoVxM1CNCxf4nuOoipTyP2pKX6P9h4Gqu0wq8Y4FXrxV3A8BG5b6nuPwzy4EUopP15KnJgG4rnsEeKCmUpXQ58BF8+IoUIm+WcdIGxwCsW1reyaT9t0EWo7OZNNXNfIc5z0LTXK3N5cuNAv/ti3vqjWP1uPRSqmXgVzNGSk8GvHGn0n2NMsTOvsWNboEAFjWNM+8cYf2YxFSysnVq5cnas6n9TX4mmY+EhI+elrcDJRzqXvA6KUQx7F+oJNPVwD3gf6h9ev6PZa2xRPU4WBZ09w+sN/IhpTyFq18Oplc190FPKGTF8ARcRQo5YrFB0gZvE9s29ZwNpv+T528JlfE/JNBXq7p91iWMrHQHtjWNJ9Om3m/bVvf1M1rIoDvgf/JUz9sATeeHkeBdy0ZIWHg/UIIr9axfynaAnBddxz4lm5+gPcu9MjMMrHQ2jj2FJ9Ka/tQwYZjvZjJpA/p5je9JcyoGbAE3NTBUeDKJaPGz7ZZlnWHSX6teYBSlFI/B87RzZ8H1v9c8qtoXkWrToPmARL2FC9csMNoatyy5OuDg8uNdlqEcU/graYF+Gwu33EXFv51bq/xuojj2H9nWg7j/7vruo8CT5rYOH82/NnSzmkKzpp/iGsXmW36sG1rJJcbuM20LGE53k0YTAwBfGKZx+oOOE2cdCb58mDVQ7tVcRz7+hCKE44AXNf9Hww7hI6ATSvyOG29XOyxcdUeugyGfQCJhP3LbDb93TBKFGbT+ynAaDlrdTd8fFn7NgW/13+Atxls9oTCuN+2ratCKlJ4AigeIjUakgBsWOq15dax7tQEm1bsM7aTSNhPBjn0GZSwO993Ar8xMSApNAXd7XSvgPC4e/Vrxr1+KeWUZcn3hVOoos0wjbmuewz4pKmdZSm4baB9moK3LxnhPIOrXmZIJOwvZjJp/T1jpyCK4fe3MThGNsMHXI9r+ltfBKfPHmNjZtjYjm1bR6QUfxlCkU4idAEU7xa8MQxbn8t5XNzXuiLo6zrGw2fvDsWW49gfq3bnnw6RTMC5rvss8B1TO7aAL63yOK8FD5d2Jyf43toho5W+GRzHHspm0/eGUKzfIsoZ2I9S5ZrSIMyS8I0z8qxoobOFCXuKB9YOMdfgkscZpBR527beGUKxTm0/KsOu6+4BrsPg2ZkZ5trw7TPyvKEFtpFZ1jT3rRniNLM7/o+TTDofy2bT/x2KsVMQ6RqM67r/juFi0QyLkwURNPP1s0LkuevM3ZzZrX+0q5Rk0vl+Njvw+VCMVaAei3B3AP8WhqHlXYXmYFYzLh0Kj79ZtYc3zzGb6ZvBcay9liUvC8WYD5H/K4ujgg8Cr4Zh77xe+PKgR6qZRCA8PpLby1ULzVb4ZpBSTjmOfUEUvf7f+lbUHwBwXXcUuBoI5TjIW+d5PHJ2nv6aj0GEj5R5/nb1Lq43uNGjFCEgmXT+OJNJ/zoUg1Womx+5rvtTCiODUFjTA4+tyTf0QupUYpJ/Pmcn75gf3namRCJxfzabDnzBgynGW8JqRSn1TeD9Ydk7Og1//ivBlv2aE+2aW8IWdB/jwbN30Wf2oNNJOI796sqV2YHQDAagES3p9UDgS4yq0WXBVwY9NtRxR9FZ8w/xxO/sDLXyLUuOO471u6EZDEjdBeC67hhwFZr3Dp4KCdya9rhzuRf5hpJ3nzbMt87YE+o9B0IIL5Fwrsxk0ubrxTXSkL6067ovAR+gyru2tXJdv8e/nJmP5LEqIfN8cuVrfMbwDN+pSCadO7LZ9ObQDQeg7n2AUpRS76KwZhBqf373OHxiu+Cp0QBuGqAP0Nd1jLsG97AmpAmeUlKpxMZcbkDrYGcYNFQAAEqpy4GHgNAneh/5P8GtrwiG/eKMjwCkzHPtacPcvEz/1q5KFIZ7idtyuYHbQzdeSzkaLQAApdQlwCNA6AfFDk7B7b8W3L+3QjSoIIBls8e4d1CxJKQ5/VKEECSTzi253MDG0I3XWpZmEACAUmo98K9AJCP7Hx8UfHy74JXymdoyAdj2NH+V3csH+82ua6mEEIJUyrkx6jn+oDSNAACUUhcCm4FInpkYz8PnhwRf2CWYnPmzSwSwdsEhvrByL73mr3WeEiGEl0o5N2SzA/dE8gENmkoAAEqpC4AtQGR7g7eNwc07JC8cAvYtoic5wWdWKKP7eatRqPzE9dls+h8j+4gGTScAAKXUOuBxYF6U33lyRPDskMeGJeHM41eiWPl/lM2m74v0Qxo0pQAAlFLnULiGZn6U3xkerkvlvz+bTd8f6Yc0aaZF1ZNwXfe/gPVAXVbFokBKOZVKJa5q1sqHJhYAgOu6LwJrgab9B1bCceydqZSTzmbTDzW6LH40bRNQjlLqD4G7CXmEEHYTIITwkknnK7ncwIdCNRwRTR0BSnFd9z4KN5H8tNFlqYRlWWOpVOJtrVL50EICAHBddzvwJuCzGLxeEgWJhPOTZNJelM2mn2p0WWqhZZqAcpRSFwNfBxab2DFtAqQU+UTCuTmXGzC+rqURtKwAAJRSCyncXn6Frg0TATiOtc9x7LdkMumqr3Q3Ky0tgBmUUjdQaBZqXlHUEYAQkEg4312+PHN1zZmbjJbqA1TCdd1NwLkY3F8cFNu29qdSyXe3Q+VDm0SAUpRSVwCfA1YFSR80AliWnHAce2MYN3M1E20RAUopXlt3FnADYLx/qziufyCZdOa0W+VDG0aAUpRSc4GbgQ1UmECqFAGEEJ7j2D+xbXlNLe/wtRptLYAZlFJ9FCLCXwB9pb+VC6CwQ9f+gWXJP8lk0jvqV8rG0BECmEEp1UPhXMJNFOcPZgQgpcg7jv2oZckP1fryVivTUQKYQSmVpHBg9cOjo4dXOY79oJTiIybXrrcq/w99zo6mO4xCQAAAAABJRU5ErkJggg==", Cheats.rush);
            addMode("<span style=\"font-size: 18px\">Monster Brawl</span>", [`<img style="height: 28px; margin-left: 5px; margin-right: 8px" src="https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg">`], Cheats.brawl);
            addMode("<span style=\"font-size: 15px\">Santa's Workshop</span>", ['<img style="height: 28px; margin-left: 3px; margin-right: 6px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZERTc2OyIgZD0iTTQzMy42NjEsMjM3LjgzN2MtNC40OTctNi4yMTQtNC44OC0xNC40NC0xLjIyNS0yMS4xODRjMTEuMzY1LTIwLjk2NywxNy43NzMtNDUuMDE0LDE3LjY1MS03MC41NjYKCUM0NDkuNzAxLDY0Ljg2OSwzODIuNTY0LTEuMDM3LDMwMS4zNTIsMC4wMTJjLTgwLjE4MywxLjAzNi0xNDQuODY0LDY2LjM1OS0xNDQuODY0LDE0Ni43ODhjMCwzMi41NTMsMTAuNTk1LDYyLjYzLDI4LjUyNiw4Ni45NzIKCWM3Ljc1MywxMC41MjYsNy4yMTMsMjUuMS0xLjU0MywzNC44MDhjLTEzLjI5NywxNC43NDEtNDEuOTM1LDI0LjMwNi0xMDIuNTk1LTE2LjI3N2MtNi42NTItNC40NS0xNC40NjItNi44NjQtMjIuNDY1LTYuODY0bDAsMAoJYy0xOS45NDcsMC0zNi44MzMsMTQuNjI4LTM5Ljc3NiwzNC4zNTdDNy44ODksMzUxLjgxNiw2LjUyLDUxMiwyMDYuOTY2LDUxMmg3MS4wODNDNDY2LjA1LDUxMiw1MTYuMTI3LDM1MS44MDEsNDMzLjY2MSwyMzcuODM3eiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkI2NDE7IiBkPSJNMTgzLjQ3LDI2OC41ODJjLTMuOTMsNC4zNTctOS4yMDIsOC4yNjEtMTYuMjQ0LDEwLjU1MmMyNC40NjksNS44ODIsMzguODItMS4zMTksNDcuMTQ5LTEwLjU1MgoJCWM4Ljc1Ny05LjcwOCw5LjI5Ni0yNC4yODEsMS41NDMtMzQuODA4Yy0xNy45My0yNC4zNDItMjguNTI2LTU0LjQyLTI4LjUyNi04Ni45NzNjMC03NS44MzMsNTcuNTAzLTEzOC4yMjYsMTMxLjI4MS0xNDUuOTgKCQljLTUuNjg5LTAuNjAxLTExLjQ2Ny0wLjg4NC0xNy4zMjMtMC44MDljLTgwLjE4MywxLjAzNi0xNDQuODY0LDY2LjM1OS0xNDQuODY0LDE0Ni43ODhjMCwzMi41NTMsMTAuNTk1LDYyLjYzLDI4LjUyNiw4Ni45NzMKCQlDMTkyLjc2NiwyNDQuMywxOTIuMjI2LDI1OC44NzMsMTgzLjQ3LDI2OC41ODJ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZCNjQxOyIgZD0iTTQ5LjUzOSwyNzkuNzk2YzIuMTM3LTE0LjMxNywxMS42MTgtMjUuOTQyLDI0LjI4Mi0zMS4yNDVjLTQuODY2LTIuMDIyLTEwLjA5MS0zLjExLTE1LjQxMi0zLjExCgkJbDAsMGMtMTkuOTQ3LDAtMzYuODMzLDE0LjYyOC0zOS43NzYsMzQuMzU3QzcuODg5LDM1MS44MTYsNi41Miw1MTIsMjA2Ljk2Niw1MTJoMzAuOTA1QzM3LjQyNSw1MTIsMzguNzk0LDM1MS44MTYsNDkuNTM5LDI3OS43OTZ6CgkJIi8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZCNjQxOyIgZD0iTTgwLjUxOCwzNDQuMzM2Yy04Ljc2Niw4LjY1Ni0xMC4yNzcsMjIuMjY4LTMuNTk4LDMyLjYxOQoJCWMxOS41MDQsMzAuMjI3LDY4LjM1MSw4Ni4yODMsMTYyLjM3Miw4Ni4yODNjNTcuMjU2LDAsMTE3Ljc5MS0zNS44MDksMTI5LjA2NC05NS4wOTdjOS4zMS00OC45NjYtMTkuMjQ2LTEwOC44MjEtNzUuMzMtMTA2LjI0NwoJCWMtNDEuMDk3LDEuODg3LTY1LjEzNSwzNy40MTUtOTkuODY1LDUzLjg0MWMtMjQuMzk4LDExLjU0LTUwLjg0NCwxOC42NTEtNzcuNjg3LDIxLjMwNwoJCUMxMDIuNjk4LDMzOC4zMDYsOTAuODA1LDMzNC4xNzgsODAuNTE4LDM0NC4zMzZ6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6IzM4NDg0QTsiIGQ9Ik0zODguMzk0LDExMC44MzNjLTMuNTAyLDAtNi42NzQtMi4zOTYtNy41MTMtNS45NTFsLTMuNzE1LTE1LjczCgljLTAuOTgxLTQuMTUzLDEuNTkxLTguMzE1LDUuNzQzLTkuMjk1YzQuMTUyLTAuOTc5LDguMzE1LDEuNTkxLDkuMjk1LDUuNzQzbDMuNzE1LDE1LjczYzAuOTgxLDQuMTUzLTEuNTkxLDguMzE1LTUuNzQzLDkuMjk1CglDMzg5LjU4LDExMC43NjUsMzg4Ljk4MiwxMTAuODMzLDM4OC4zOTQsMTEwLjgzM3oiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQjY0MTsiIGQ9Ik00MjcuNjE4LDY4Ljk5NGMwLDAsMy4xOTgsNDUuODMyLTE4LjAzMyw2Ni41OTFjLTIxLjIzMSwyMC43NTksMTQuMTU0LDUzLjMxNCw1Ni4xNDUsMjIuNjQ2CgljNi4wMzItNC40MDUsMTIuMTQzLTcuMjA0LDE4LjE4NC04Ljc2OGM3Ljc3Ny0yLjAxMiwxMy4yNDMtOC45NjcsMTMuMjQzLTE2Ljk5OWwwLDBjMC03LjcyNC01LjAzMS0xNC41OTctMTIuNDM4LTE2Ljc4NgoJYy00LjkyNS0xLjQ1Ni0xMS4xOC0yLjMyNS0xOC41MTYtMS4zMjVjMCwwLDI1LjM5My0yMi4xMzgsMTkuMTE5LTQ3Ljc1M2MtMi4wMjctOC4yOC0xMS44NTYtMTEuNzI2LTE4LjgzNi02LjgzMgoJQzQ1Ny40NjEsNjYuMDk0LDQ0My40NTQsNzIuNzY0LDQyNy42MTgsNjguOTk0eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K">'], Cheats.workshop);
            addMode("Settings", null, Cheats.settings, true);
            
            dragElement(controls, guiWrapper);
            dragElement(dragButton, guiWrapper);
            
            function dragElement(element, parent) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                element.onpointerdown = function (e = window.event) {
            /* // e.preventDefault(); */
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onpointerup = function () {
                        document.onpointerup = null;
                        document.onpointermove = null;
                    };
                    document.onpointermove = function (e = window.event) {
            /* // e.preventDefault(); */
                        pos1 = pos3 - e.clientX;
                        pos2 = pos4 - e.clientY;
                        pos3 = e.clientX;
                        pos4 = e.clientY;
                        var ratio = 1 || parseFloat((0.75 / window.devicePixelRatio).toFixed(2));
                        parent.style.top = (parent.offsetTop - pos2 / ratio) + "px";
                        parent.style.left = (parent.offsetLeft - pos1 / ratio) + "px";
                    }
                }
            }
            window.addEventListener("keydown", keydown);
            let alertInterval = setInterval(() => {
                if (!Cheats.alerts[0].connection) Cheats.alerts[0].connect();
                else clearInterval(alertInterval);
            }, 5000);
            function close() {
                guiWrapper.remove();
                clearInterval(alertInterval);
                for (const category in Cheats) for (const cheat of Cheats[category]) if (cheat.enabled) cheat.run()
                Object.keys(Cheats).forEach(mode => Cheats[mode].forEach(cheat => cheat.enabled && (cheat.run(), setCheats(...currentMode))));
                window.removeEventListener("keydown", keydown);
            };
            let last;
            guiWrapper.addEventListener("mousemove", e => {
                if (e.target.className != "cheatName" && e.target.className != "scriptButton") {
                    if (tooltip.style.opacity != "0") {
                        tooltip.animate([{ opacity: 0.9 }, { opacity: 0 }], { duration: 200 });
                        tooltip.style.opacity = "0";
                    }
                    return;
                }
                const target = e.target.className == "scriptButton" ? e.target : e.target.parentElement;
                if (tooltip.innerText == target.dataset.description && tooltip.style.opacity == "0.9") return;
                const button = target.getBoundingClientRect();
                const parent = target.offsetParent.getBoundingClientRect();
                tooltip.innerText = target.dataset.description;
                if (tooltip.style.opacity == "0") {
                    tooltip.animate([{ opacity: 0 }, { opacity: 0.9 }], { duration: 200 });
                    tooltip.style.opacity = "0.9";
                }
                tooltip.style.left = (button.x - parent.x) + (button.width - tooltip.clientWidth) / 2 + "px";
                tooltip.style.top = (button.y - parent.y) + (button.height) + "px";
            });
            function keydown(e) {
                if (!e.ctrlKey) return;
                if (e.key.toLowerCase() == "e") {
                    e.preventDefault();
                    guiWrapper.style.display = guiWrapper.style.display === "block" ? "none" : "block";
                } else if (e.key.toLowerCase() == "x") {
                    e.preventDefault();
                    close();
                }
            }
        }
    });
})();