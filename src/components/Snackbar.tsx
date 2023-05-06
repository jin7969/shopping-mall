const Snackbar = ({ message }: { message: string }) => {
  return (
    <div className="fixed bottom-32 left-1/2 -translate-x-1/2 w-2/5 bg-zinc-800 text-center text-white font-bold py-4 rounded-md">
      {message}
    </div>
  );
};

export default Snackbar;
