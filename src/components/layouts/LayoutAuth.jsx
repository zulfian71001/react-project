
const LayoutAuth = ({children, name, nameLink, link, title, image}) => {
  return (
    <div className=" p-8 flex items-center w-full lg:w-[60%] h-auto lg:h-[80%] bg-slate-50 rounded-lg gap-4">
      <div className="w-1/2">
        <img src={image} alt="gambar" />
      </div>
      <div className=" border w-1/2" >
      <div className="my-2">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p>
            {title}
            <span>
              <a href={link} className="text-cyan-700 hover:text-cyan-900 ">{nameLink}r</a>
            </span>
          </p>
        </div>
      {children}
      </div>
    </div>
  );
};

export default LayoutAuth;
