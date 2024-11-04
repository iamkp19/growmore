import Header from "./Header";
import PrimaryButton from "./PrimaryButton";
import Sidebar from "./Sidebar";
import {
  Add_TenancyContractOwner,
  Add_TenancyContractTenant,
} from "../constants/inputdata";
import Input from "./TextInput";
import { useEffect, useState } from "react";
import { fetchProperty, getPropertyList } from "../api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const AddTenancyContracts = () => {
  const [property, setProperty] = useState();
  const [propertyList, setPropertyList] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await getPropertyList();
    const item = res?.data?.data.map(
      (item: { property: any }) => item.property
    );
    setPropertyList(item);
  };

  console.log("unitList => ", propertyList);

  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className={`flex-grow ml-80 my-5 px-2`}>
          <div className="my-5 px-2 ">
            <Header />
            <div>
              <div className="my-4 p-6 border border-[#E6EDFF] rounded-xl">
                <p className="flex gap-2 text-[18px] text-[#7C8DB5] mb-4">
                  <span className="pb-1 border-b border-[#7C8DB5]">Tenant</span>
                  <span className="pb-1">Details</span>
                </p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
                  <Select>
                    <SelectTrigger className="w-[220px] p-3 py-6 text-[16px] text-sonicsilver bg-white border border-[#CCDAFF] outline-none">
                      <div className="flex items-center">
                        <SelectValue placeholder="Select Properties" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {propertyList.map((item, i) => (
                        <SelectItem key={i} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {Add_TenancyContractTenant.map(({ label, name, type }) => (
                    <Input
                      key={name}
                      label={label}
                      name={name}
                      type={type}
                      value={""}
                      onChange={() => {}}
                      borderd
                      bgLight
                    />
                  ))}
                </div>
                <p className="flex gap-2 mt-8 mb-4 text-[18px] text-[#7C8DB5]">
                  <span className="pb-1 border-b border-[#7C8DB5]">Owner</span>
                  <span className="pb-1">Details</span>
                </p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 mb-6">
                  {Add_TenancyContractOwner.map(({ label, name, type }) => (
                    <Input
                      key={name}
                      label={label}
                      name={name}
                      type={type}
                      value={""}
                      onChange={() => {}}
                      borderd
                      bgLight
                    />
                  ))}
                </div>
                <div className="max-w-[100px]">
                  <PrimaryButton title="Save" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddTenancyContracts;
