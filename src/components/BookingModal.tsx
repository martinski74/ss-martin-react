"use client";

interface BookingResult {
  name: string;
  roomType: string;
  nights: number;
  totalPrice: number;
}

interface BookingModalProps {
  result: BookingResult | null;
  onClose: () => void;
}

const BookingModal = ({ result, onClose }: BookingModalProps) => {
  if (!result) {
    return null;
  }

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle: React.CSSProperties = {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    color: 'black',
    textAlign: 'center',
  };

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h2>Booking Confirmation</h2>
        <p>Hello, {result.name}!</p>
        <p>Room Type: {result.roomType}</p>
        <p>Number of nights: {result.nights}</p>
        <p>Total Price: {result.totalPrice.toFixed(2)} lv.</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Confirm & Close
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
