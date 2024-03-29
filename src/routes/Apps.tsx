import MovingNav from "../components/Navbar";
import { appsChild, includeFields } from "../main";

const Apps = () => {
  
  console.log("apps", includeFields(["name", "date", "path"], appsChild));

  return (
    <div className="container">
      <div className="menu w-[350px] h-[800px]">
        {includeFields(["name", "date", "path"], appsChild).map(
          (app: any, index: number) => {
            return (
              <div key={"app__" + index} className="flex flex-col mb-2">
                <a
                  href={app.path}
                  className="outline outline-1 outline-gray-300 py-2 px-2 rounded-md hover:outline-purple-500 hover:outline-2 cursor-pointer "
                >
                  <div className="flex items-center">
                    <h2 className="flex-1 text-left text-sm text-gray-600">
                      {app?.name}
                    </h2>
                    <span className="text-xs text-gray-500 px-1 border rounded-lg">
                      {app.date}
                    </span>
                  </div>
                </a>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Apps;
