import { appsChild, includeFields } from "../main";

const Apps = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="menu w-[400px]">
        {includeFields(["name", "date", "path"], appsChild).map(
          (app: any, index: number) => {
            return (
              <div key={"app__" + index} className="flex flex-col mb-2">
                <a
                  href={app.path}
                  className="border py-2 px-2 rounded-md hover:border-purple-500 cursor-pointer "
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
