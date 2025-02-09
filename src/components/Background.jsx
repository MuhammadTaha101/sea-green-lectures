
const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float top-[-10%] left-[-10%]" />
      <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float delay-1000 top-[60%] right-[-10%]" />
      <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-2000 bottom-[-10%] left-[50%]" />
    </div>
  );
};

export default Background;
