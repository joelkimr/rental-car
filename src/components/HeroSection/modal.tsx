import React from "react";

const Modal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[999999]"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col ">
        <button
          className="text-xl font-bold place-self-end text-white hover:text-orange-500 duration-300 ease-in-out"
          onClick={() => onClose()}
        >
          x
        </button>
        <div className="bg-white p-7 rounded">
          <div>
            <h3 className="text-2xl font-semibold">
              About
              <span className="font-extrabold text-[#F8462E] text-3xl">
                {" "}
                CAR{" "}
              </span>
              Rental
            </h3>
            <h2
              className="text-lg text-gray-900 p-3
             font-semibold"
            >
              Take your driving experience to the next level with our top-notch
              vehicles for your cross-country adventures.
            </h2>
            <div className="text-gray-600 p-3">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                iste! Harum distinctio ad itaque minus nihil sunt recusandae,
                sed atque corrupti veniam unde eveniet assumenda laudantium
                necessitatibus. Eligendi, soluta facere. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Repudiandae mollitia,
                aspernatur quibusdam molestias optio laboriosam consequatur
                fugit porro sunt nemo. Itaque facere fugit numquam, nam
                consequuntur soluta quasi cum quos.
              </p>
              <br />
              <br />
              <hr />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                molestiae aut nobis similique, assumenda minus harum nihil
                eveniet, perferendis repudiandae temporibus eos obcaecati!
                Perspiciatis vitae porro consequatur, dignissimos blanditiis
                hic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
