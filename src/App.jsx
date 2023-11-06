import React, { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function QuestionsAndAnswersOnAssemblyLanguage() {
  return (
    <div>
      <h1>questions and answers</h1>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <p>1Q) there are ___ main sections in every Assembly code.</p>
        <p>1A) 3</p>
        <p>
          2Q) which of the following are sections of assembly code? select 3 of
          the following: text Section, bss Section, static Section, data
          Section.
        </p>
        <p>2A) text Section, bss Section,data Section</p>
        <p>
          3Q) True or False comments are written with a hash(#) or asterisk(*).
        </p>
        <p>
          3A) false due to comments being written after using a semi-colon(;).
          thus semi-colons are used for starting to write comments.
        </p>
        <p>
          4Q) Match the following memory segments to the kind of data they
          store.the memory segments are: Data Segment , Stack Segment
        </p>
        <p>
          4A) Data Segment stores constants an variables. Stack Segment stores
          data values that are passed to functions.
        </p>
        <p>
          5Q) ___ registers are specific areas in a program for storing data,
          stack or code.
        </p>
        <p>5A) segment</p>
        <p>
          6Q) True or False – The general register can be divided into the data,
          pointer and index registers.
        </p>

        <p>6A) True</p>

        <p>
          7Q) Which of the following addressing methods accesses the registers
          directly? the addressing methods are: Register Addressing ; Indirect
          Memory Addressing ; Direct Offset Addressing ;
        </p>
        <p>7A) Register Addressing</p>

        <p>
          8Q) Which part of the following code uses Immediate Addressing
          <br />
          <pre
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p>_start:</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <p>mov eax,4</p>
              <p>mov ebx,1</p>
              <p>mov ecx,hello</p>
              <p>mov edx,helloLen</p>
            </div>
          </pre>
        </p>
        <p>8A) [mov eax,4] and [mov ebx,1]</p>
        <p>
          9Q) Match the following Addressing Modes with the correct description.
          they are: Immediate Addressing ; Direct Memory Addressing ;<br />
          9A) Immediate Addressing a constant is specified as a value. Direct
          Memory Addressing a variable is specified in place of a value.
        </p>
        <p style={{ textAlign: "start" }}>
          10Q) Select the part of the code that uses Indirect Memory Addressing.
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <li>mov ebp,hello</li>
            <li>mov eax,4</li>
            <li>mov ebx,1</li>
            <li>mov ecx,ebp</li>
            <li> mov edx,helloLen</li>
          </ul>
          10A) mov ecx,ebp
        </p>
        <p style={{ textAlign: "start" }}>
          11Q) Which of the following addressing methods accesses the registers
          directly?
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <li>Register Addressing</li>
            <li>Indirect Memory Addressing</li>
            <li>Direct Offset Addressing</li>
          </ul>
          11A) Register Addressing
        </p>
        <p style={{ textAlign: "start" }}>
          12Q) Which of the following instruction copies data from one location
          to another?
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <li>
              the xor instruction; the add instruction; the mov instruction; the
              equ instruction;
            </li>
          </ul>
          12A) The mov instruction
        </p>
        <p style={{ textAlign: "start" }}>
          13Q) True or False – The two operands that are specified after a mov
          instruction must be of the same size
          <br />
          13A) True
        </p>
        <p style={{ textAlign: "start" }}>
          14Q) Which of the following statements about uninitialized data is
          correct? Select the two correct answers from the list provided.
          <ol
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <li>they require a bss section to be created</li>
            <li>they are created just like initialised variables</li>
            <li>they can only take up the space of 1byte</li>
            <li>they are variables created without an initial value</li>
          </ol>
          14A) they require a bss section to be created ; they are variables
          created without an initial value ;
        </p>
        <p style={{ textAlign: "start" }}>
          15Q) Arrange the steps for creating a variable in the correct order.
          <ol
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <li>Specify the amount of space the variable will take</li>
            <li>Specify the value of the variable</li>
            <li>Specify the variable name</li>
          </ol>
          15A) Specify the variable name ; Specify the amount of space the
          variable will take ; Specify the value of the variable ;
        </p>
        <p style={{ textAlign: "start" }}>
          16Q) Which of the following commands are used to create constants?
          Select the three correct answers.
          <ol
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <li>%define Command</li>
            <li>TIMES Command</li>
            <li>%assign command</li>
            <li>equ command</li>
          </ol>
          16A) <li>%define Command ; %assign command ; equ command</li>
        </p>
        <p style={{ textAlign: "start" }}>
          17Q) Match the following commands with their correct descriptions.
          Choose the corresponding answers from the drop-down menu.
          <ol
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <li>
              %define Command <p>used to create only numeric constants</p>
            </li>
            <li>
              %assign Command{" "}
              <p>used to create constants from numbers and strings</p>
            </li>
          </ol>
          17A) <li>%define Command</li>
          <option>used to create constants from numbers and strings</option>
          <li>%assign Command</li>
          <option>used to create only numeric constants</option>
        </p>
        <p style={{ textAlign: "start" }}>
          18Q)
          <br />
          Which of the following are used to carry out operations on a binary
          level? Select the two correct answers from the following: The "and"
          Instruction ; The "add" Instruction ; The "assign" Command ; The "or"
          instruction
          <br />
          18A)
          <li>The "add" Instruction ; The "or" instruction</li>
        </p>
        <p style={{ textAlign: "start" }}>
          19Q)
          <br />
          Which of the following statements about the xor instruction is NOT
          correct? Select the correct answer from the following: It operates on
          the binary level ; The result of the operation is stored in the first
          operand ; It carries out the same function as the imul command ; The
          first operand passed to it must be a storage location;
          <br />
          19A)
          <option>It carries out the same function as the imul command</option>
        </p>
        <p style={{ textAlign: "start" }}>
          20A)Which of the following instructions compares the operands passed
          to it?
          <li>The not instruction</li>
          <li>The add instruction</li>
          <li>The cmp instruction</li>
          <li>The mov instruction</li>
          20Q)
          <option>The cmp instruction</option>
        </p>
        <p style={{ textAlign: "start" }}>
          21Q)The jmp instruction is used to create an -------------- jump in
          assembly language programming.
          <br />
          21A)
          <option>unconditional</option>
        </p>
        <p style={{ textAlign: "start" }}>
          22Q) True or False – A 'ret' instruction is absolutely necessary for
          running a function in Assembly.
          <br />
          22A) True
        </p>
        <p style={{ textAlign: "start" }}>
          22Q) Match the following keywords to their functions in assembly. mov
          ; call
          <br />
          22A) mov =&gt; assigns the value of the second
          operandOrVariableOrRegister to the first locationOrVariableOrRegister;
          call =&gt; used in running a funtion;
        </p>
        <p style={{ textAlign: "start" }}>
          23Q) ------------ are used to store and retrieve information on a last
          in first out basis.
          <br />
          23A) stacks
        </p>
        <p style={{ textAlign: "start" }}>
          24Q) Which of the following describes a situation in which a function
          calls itself?
          <br />
          24A) function recursion
        </p>
      </article>
      25Q)Select the part of the code that adds a newline character after a
      string. Correct.
      <ul>section .data strl db "hello",10</ul>
      25A) 10 26Q)Arrange the steps for creating a loop in the correct order.
      Drag and drop the answers into the correct sequence of events. Answer
      instructions 26A)Specify the number of times the loops will run in the ECX
      register Label the section of the code to be looped Used the ‘loop’
      command to start the looop 27Q)Which of the following is created using the
      percentage (%) sign? Drag the answer from the word bank to the text box.
      Answer instructions Macros Calls Loops Strings 27A) Correct ans =&gt;
      Macros
    </div>
  );
}
function LessonSummaryModule2() {
  return (
    <ul>
      <li>
        Constants can be created with the equ, assign or define commands.
        Constants created with the assign command can be redefined, but cannot
        be reassigned.
      </li>
      <li>
        While the Assign command is used for numeric constants, the define
        command is used for numbers and strings. The inc command adds 1 to a
        variable, while the dec command reduces a variable by 1.
      </li>
      <li>
        The result of add command is automatically stored in the first operand.
        While the mul command multiplies unsigned data, the imul command
        multiplies signed data. The EAX register must store the first value
        passed to the mul & div commands.
      </li>
      <li>
        The and, or, xor and not operators are used to carry out logical checks
        on a binary level. The compare (cmp) instruction compares the values of
        the two operands passed to it .
      </li>
      <li>
        {" "}
        A conditional jump creates a loop that runs as long as a condition is
        true. The jmp instruction creates an unconditional jump. Functions are
        called using the ‘call’ keyword, and must have a return statement.
      </li>
      <li>
        The Stack data structure is used to store and retrieve data on a last in
        first out basis. The push command is used to add data to a stack, while
        the pop command removes the topmost data from a stack.
      </li>
      <li>
        Function recursion describes a situation in which a function calls
        itself. The number of times a loop is needed to run, must be specified
        in the ECX register.
      </li>
      <li>
        Macros are a set of instructions that can be initiated using a unique
        name, in any part of an Assembly code. Macros are created with the
        percentage (%) sign.
      </li>
    </ul>
  );
}
function GameScene() {
  return (
    <canvas
      style={{ width: `${window.innerWidth}`, height: `${window.innerHeight}` }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
function GameSceneWrapper(props) {
  console.log(props);
  return (
    <div
      style={{
        backgroundColor: "blue",
        border: "1px solid blue",
        width: "fit-content",
        height: "fit-content",
      }}
    ></div>
  );
}
function WebCamera() {
  const [cameraSwitch, setCameraSwitch] = useState(false);
  const canvasRef = useRef();
  const videoRef = useRef();
  let mediaStream = null;

  const initializeCamera = () => {
    if (cameraSwitch) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((signal) => {
          mediaStream = signal;
          const video = videoRef.current;
          video.style.display = 'block';
          video.srcObject = mediaStream;
          video.play();
        })
        .catch((err) => {
          window.alert(err);
        });
    } else {
      if (mediaStream) {
        // Stop the camera access
        const tracks = mediaStream.getTracks();
        tracks.forEach((track) => track.stop());
        mediaStream = null;
      }
      const video = videoRef.current;
      video.pause();
      video.style.display = 'none';
    }
  };

  useEffect(() => {
    initializeCamera();
  }, [cameraSwitch]);

  return (
    <>
      <video ref={videoRef}></video>
      <button onClick={() => setCameraSwitch(!cameraSwitch)}>Toggle Camera</button>
      <canvas ref={canvasRef}></canvas>
    </>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <WebCamera/>
      {/*
        <GameSceneWrapper>
          <GameScene/>
        </GameSceneWrapper>
        <QuestionsAndAnswersOnAssemblyLanguage />*/}
    </React.Fragment>
  );
}

export default App;
