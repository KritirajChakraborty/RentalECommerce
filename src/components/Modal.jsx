import { createPortal } from "react-dom";
import { forwardRef,useImperativeHandle,useRef } from "react";
import { Link } from "react-router-dom";

const Modal = forwardRef( function Modal({quantity,title,price},ref){
     const dialog= useRef();

     useImperativeHandle(ref, () => {
        return {
          open: () => {
            dialog.current.showModal();
          },
        };
      });
      function handleClick(){
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (dialog.current) {
            dialog.current.close();
            window.alert('Congratulations, Your order has been placed')
        }
    
      }
      function handleCancel(){
        window.scrollTo({top:0, behavior: 'smooth'});
      }
    

    return createPortal((
        <dialog ref={dialog} className="fixed z-50 inset-0 overflow-y-auto">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-60"></div>
      
        {/* Modal content */}
        <div className="flex items-center justify-center h-62 rounded-sm">
          <div className="bg-white rounded-lg p-8 z-50">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="font-primary font-semibold mb-4">{`Your order of ${title} with quantity ${quantity} is placed and will reach you soon...`}</p>
            <p className="font-primary font-semibold mb-4">{`Your total bill monthly will be ₹${quantity * price} + ₹5000(one time payment) for security deposit.`}</p>
            <form action="dialog" className="flex flex-row gap-6 justify-center text-center">
              <Link to='/shop'>
                <button onClick={handleCancel} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700">Cancel</button>
              </Link>
              <Link to='/'>
                <button onClick={handleClick} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">Checkout</button>
              </Link>
            </form>
          </div>
        </div>
      </dialog>
      
    
    ), document.getElementById('modal-root'))
})
export default Modal;