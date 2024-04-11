'use client';
import React, { useEffect, useRef, useState } from "react";
import Modal from "../Modal";

const AquaNote = () => {
  const [id, setId] = useState(1);

  const Note = {
    id: 1,
    title: "",
    content: "",
    edited: "",
    bg: "#000",
  };

  const [notes, setNotes] = useState([Note]);
  const titlePlacehoder = useRef<HTMLDivElement>(null)?.current;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // id: 1, title: 'some title', content: 'any content', edited: 'edited time', bg: 'some color' : done,
  // tooltip on controls: done
  // popup for bigger notes
  // menus library for background list

  // when click opacity none and show in root div element and overlay as well

  const addNote = () => {
    let currentId = id + 1;
    let note = {
      ...Note,
      id: currentId,
    };
    setNotes((notes) => [...notes, note]);
    setId(currentId);
  };

  const onTitleChange = (e: any, id: number) => {
    const notesCopy = [...notes];
    const note = notesCopy.find((i) => i.id === id);
    if (note) {
      note.title = e.target.textContent || ""; // Ensure note title is not null or undefined
      setNotes(notesCopy);
    }
  };

  const onContentChange = (e: any, id: number) => {
    const notesCopy = [...notes];
    const note = notesCopy.find((i) => i.id == id);
    if (note) {
      note.content = e.target.textContent;
      setNotes(notesCopy);
    }
  };

  const deleteNote = (idToDelete: number) => {
    const updatedNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(updatedNotes);
  };

  const editNote = () => {};

  const copyNote = () => {};

  const changeBg = () => {};

  return (
    <div className="w-full">
      <div className="border w-full p-2 flex items-center">
        <h1 className="text-2xl font-bold text-gray-500">Aqua Notes</h1>
        <div
          onClick={addNote}
          className="w-[50px] h-[50px] rounded-full bg-orange-300 relative ml-5 shadow-lg cursor-pointer"
        >
          <div className="h-1 w-1/2 bg-white rounded-full origin-center rotate-90 absolute top-1/2 left-1/4"></div>
          <div className="h-1 w-1/2 bg-white rounded-full absolute top-1/2 left-1/4"></div>
        </div>
      </div>
      <div className="border w-[100%] shadow-lg ">
        <div className="flex gap-1 flex-wrap items-start bg-lime-100 p-2">
          {notes.map((item: any, index: number) => (
            <>
              <div
                key={"card__" + index}
                className="note relative flex flex-col rounded-lg shadow-lg bg-white"
              >
                <div className="w-full">
                  <div
                    className="absolute text-lg text-gray-400 p-2"
                    style={{
                      display: item.title ? "none" : "block",
                    }}
                  >
                    Title
                  </div>
                  <div
                    className="text-lg text-gray-700 p-2   outline-none "
                    contentEditable
                    spellCheck={false}
                    onKeyUp={(e) => onTitleChange(e, item.id)}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
                <div className="border">
                  <div
                    className="w-[200px]  min-h-[100px] text-lg text-gray-400 p-2  outline-none"
                    contentEditable
                    spellCheck={false}
                    onInput={(e) => onContentChange(e, item.id)}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
                <div className="flex justify-end m-1">
                  <span className="text-xs text-gray-500">
                    Edited on: {"28 March"}
                  </span>
                </div>
                <div className="note_controls border p-1">
                  <div className="flex items-center">
                    <span
                      className="text-red-400 font-bold py-1 px-3 cursor-pointer border-r-2 border-r-gray-400 bg-gray-100"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-place="bottom"
                      data-tooltip-content="Delete"
                      onClick={() => deleteNote(item.id)}
                    >
                      D
                    </span>
                    <span
                      className="text-green-400 font-bold py-1 px-3 cursor-pointer border-r-2 border-r-gray-400 bg-gray-100"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-place="bottom"
                      data-tooltip-content="Edit"
                      onClick={editNote}
                    >
                      E
                    </span>
                    <span
                      className="text-teal-400 font-bold py-1 px-3 cursor-pointer border-r-2 border-r-gray-400 bg-gray-100"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-place="bottom"
                      data-tooltip-content="Copy"
                      onClick={copyNote}
                    >
                      C
                    </span>
                    <span
                      className="text-teal-400 font-bold py-1 px-3 cursor-pointer border-r-2 border-r-gray-400 bg-gray-100"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-place="bottom"
                      data-tooltip-content="Change Background"
                      onClick={changeBg}
                    >
                      B
                    </span>
                  </div>
                </div>
              </div>
              <Modal isOpen={modalOpen} onClose={closeModal}>
                <div
                  key={"card__" + index}
                  className="note relative flex flex-col rounded-lg shadow-lg bg-white"
                >
                  <div className="w-full">
                    <div
                      className="absolute text-lg text-gray-400 p-2"
                      style={{
                        display: item.title ? "none" : "block",
                      }}
                    >
                      Title
                    </div>
                    <div
                      className="text-lg text-gray-700 p-2   outline-none "
                      contentEditable
                      spellCheck={false}
                      onInput={(e) => onTitleChange(e, item.id)}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                  <div className="border">
                    <div
                      className="w-[200px]  min-h-[100px] text-lg text-gray-400 p-2  outline-none"
                      contentEditable
                      spellCheck={false}
                      onInput={(e) => onContentChange(e, item.id)}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                  <div className="flex justify-end m-1">
                    <span className="text-xs text-gray-500">
                      Edited on: {"28 March"}
                    </span>
                  </div>
                  <div className="note_controls border p-1">
                    <div className="flex items-center">
                      <span
                        className="text-red-400 font-bold py-1 px-3 cursor-pointer border-r-2 border-r-gray-400 bg-gray-100"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-place="bottom"
                        data-tooltip-content="Delete"
                        onClick={() => deleteNote(item.id)}
                      >
                        D
                      </span>
                      <span
                        className="text-green-400 font-bold py-1 px-3 cursor-pointer border-r-2 border-r-gray-400 bg-gray-100"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-place="bottom"
                        data-tooltip-content="Edit"
                        onClick={editNote}
                      >
                        E
                      </span>
                      <span
                        className="text-teal-400 font-bold py-1 px-3 cursor-pointer border-r-2 border-r-gray-400 bg-gray-100"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-place="bottom"
                        data-tooltip-content="Copy"
                        onClick={copyNote}
                      >
                        C
                      </span>
                      <span
                        className="text-teal-400 font-bold py-1 px-3 cursor-pointer border-r-2 border-r-gray-400 bg-gray-100"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-place="bottom"
                        data-tooltip-content="Change Background"
                        onClick={changeBg}
                      >
                        B
                      </span>
                    </div>
                  </div>
                </div>
              </Modal>
            </>
          ))}
          {JSON.stringify(notes, null)}
        </div>
      </div>
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};

// Navbar chargin status and date in small text and icon

export default AquaNote;

// Create carosel component Try these creator prompts

// Take away from recent list gpt
// cursor pointer on hover

// little white blur at the end
// .description {
//     mask-image: linear-gradient(to right, var(--cib-color-background-surface-app-primary) 90%, transparent);
// }

// ::after {
//     content: "";
//     position: absolute;
//     inline-size: 3px;
//     block-size: 100%;
//     inset-inline-start: 0px;
//     border-start-start-radius: var(--cib-comp-thread-host-border-radius);
//     border-end-start-radius: var(--cib-comp-thread-host-border-radius);
// }

// understood i can show actionable things in small area new ways to design think

// Create table filter like this
// https://htmedia-my.sharepoint.com/personal/rohit_manjhi_hindustantimes_com/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Frohit%5Fmanjhi%5Fhindustantimes%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files

// select for action flow is also good implement it as well
