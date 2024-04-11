'use client';
import React, { useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import { ColumnsIcon, CopyIcon, CroissantIcon, CropIcon, Cross, CrossIcon, Delete, DeleteIcon, Edit2Icon } from "lucide-react";

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
      <div className="w-full p-2 flex items-center shadow-md">
        <h1 className="text-2xl font-bold text-gray-500">Aqua Notes</h1>
        <div
          onClick={addNote}
          className="w-[50px] h-[50px] rounded-full bg-orange-300 relative ml-5 shadow-lg cursor-pointer flex items-center justify-center"
        >
          <Cross className="text-white" size={24} />
        </div>
      </div>
      <div className="w-[100%] shadow-lg overflow-y-scroll h-[600px] bg-lime-100">
        <div className="flex gap-1 flex-wrap items-start  p-2 h-full">
          {notes.map((item: any, index: number) => (
            <>
              <div
                key={"card__" + index}
                className="note relative flex h-[400px] w-[300px] flex-col rounded-lg shadow-lg bg-white flex-none"
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
                <div className="border flex-1">
                  <div
                    className="w-[200px]  min-h-[100px] text-lg text-gray-400 p-2  outline-none"
                    contentEditable
                    spellCheck={false}
                    onBlur={(e) => onContentChange(e, item.id)}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
                <div className="flex justify-end m-1">
                  <span className="text-xs text-gray-500">
                    Edited on: {"28 March"}
                  </span>
                </div>
                <div className="note_controls p-1">
                  <div className="flex items-center ">
                    <span
                      className="text-red-400 font-bold py-2 px-3 cursor-pointer border-r-2 bg-gray-50"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-place="bottom"
                      data-tooltip-content="Delete"
                      onClick={() => deleteNote(item.id)}
                    >
                      <CroissantIcon size={24} />
                    </span>
                    <span
                      className="text-green-400 font-bold py-2 px-3 cursor-pointer border-r-2 bg-gray-50"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-place="bottom"
                      data-tooltip-content="Edit"
                      onClick={editNote}
                    >
                      <Edit2Icon size={24} />
                    </span>
                    <span
                      className="text-teal-400 font-bold py-2 px-3 cursor-pointer border-r-2 bg-gray-50"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-place="bottom"
                      data-tooltip-content="Copy"
                      onClick={copyNote}
                    >
                      <CopyIcon size={24} />
                    </span>
                    <span
                      className="text-teal-400 font-bold py-2 px-3 cursor-pointer border-r-2 bg-gray-50"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-place="bottom"
                      data-tooltip-content="Change Background"
                      onClick={changeBg}
                    >
                      <ColumnsIcon size={24} />
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
                  <div className="">
                    <div
                      className="w-[200px]  min-h-[50px] text-lg text-gray-400 p-2  outline-none"
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
                  <div className="note_controls p-1">
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
          {/* {JSON.stringify(notes, null)} */}
        </div>
      </div>
      {/* <button onClick={openModal}>Open Modal</button> */}
    </div>
  );
};

// Navbar chargin status and date in small text and icon

export default AquaNote;

