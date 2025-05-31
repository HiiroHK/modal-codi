export function Modal({ isOpen }) {
  if (isOpen) {
    return (
      <div className="fixed bg-white z-10 flex items-center justify-center border rounded-2xl ml-5 ">
        <div className="">modal</div>
      </div>
    );
  }
  return null;
}
