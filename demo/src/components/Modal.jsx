// import React, { useState } from "react";
// import styles from "./Modal.module.css";
// import { RiCloseLine } from "react-icons/ri";

// const Modal = ({ setIsOpen }) => {
//   const [text1, setText1] = useState("");
//   const [text2, setText2] = useState("");
//   const [textarea, setTextarea] = useState("");

//   const handleSubmit = () => {
//     // Handle submit logic for both text fields and textarea
//     console.log("Submitting text1:", text1);
//     console.log("Submitting text2:", text2);
//     console.log("Submitting textarea:", textarea);
//     // Example: Make API calls or perform state updates
//     // Reset the form fields after submission if needed
//     setText1("");
//     setText2("");
//     setTextarea("");
//     setIsOpen(false); // Close modal after submission
//   };

//   return (
//     <>
//       <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
//       <div className={styles.centered}>
//         <div className={styles.modal}>
//           <div className={styles.modalHeader}>
//             <h5 className={styles.heading}>Dialog</h5>
//           </div>
//           <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
//             <RiCloseLine style={{ marginBottom: "-3px" }} />
//           </button>
//           <div className={styles.modalContent}>
        
//             <div className={styles.inputContainer}>
//               <label>
//                 Text 1:
//                 <input
//                   type="text"
//                   value={text1}
//                   onChange={(e) => setText1(e.target.value)}
//                   className={styles.textInput}
//                 />
//               </label>
//               <label>
//                 Text 2:
//                 <input
//                   type="text"
//                   value={text2}
//                   onChange={(e) => setText2(e.target.value)}
//                   className={styles.textInput}
//                 />
//               </label>
//               <label>
              
//                 <textarea
//                   value={textarea}
//                   onChange={(e) => setTextarea(e.target.value)}
//                   className={styles.textarea}
//                 ></textarea>
//               </label>
//             </div>
//           </div>
//           <div className={styles.modalActions}>
//             <div className={styles.actionsContainer}>
//               <button className={styles.submitBtn} onClick={handleSubmit}>
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;


// src/components/Modal.js

import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleSubmit = () => {
    console.log("Submitting text1:", text1);
    console.log("Submitting text2:", text2);
    console.log("Submitting textarea:", textarea);
    setText1("");
    setText2("");
    setTextarea("");
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.inputContainer}>
              <label>
                Text 1:
                <input
                  type="text"
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}
                  className={styles.textInput}
                />
              </label>
              <label>
                Text 2:
                <input
                  type="text"
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                  className={styles.textInput}
                />
              </label>
              <label>

              
                <textarea
                  value={textarea}
                  onChange={(e) => setTextarea(e.target.value)}
                  className={styles.textarea}
                ></textarea>
              </label>
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.submitBtn} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
