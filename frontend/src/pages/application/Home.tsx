import { useState, useEffect } from "react";
import SiteHeader from "../../components/partials/SiteHeader";
import { userFields } from "../../helpers/userFormFields";

const fields = userFields;
const fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Home() {
 

  useEffect(() => {
    
  }, []);
  return (
    <>
      <SiteHeader />
      
      <div className="grid place-items-center">
       
      </div>
    </>
  );
}
