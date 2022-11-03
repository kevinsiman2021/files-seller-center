import React from "react";
import { useForm } from "react-hook-form";

const UploadFiles = () => {


    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("http://10.100.133.95:8083/sc-files/upload", {method: "POST", body: formData,}).then((res) => res.json())
        .then(data => {console.log(data)})
        if(data){
          document.getElementById("msj").innerHTML = "archivo cargado con exito"
          document.getElementById("inputFile").value = ""
        }

    }; 

    return (
        <div class="text-center bg-secondary p-5 mt-5 ml-5 mr-10 col-md-6 offset-md-3">
            
            <form onSubmit={handleSubmit(onSubmit)} class="form-horizontal ">

                <div class="form-group">
                    <br></br>
                    <h3><center>Carga de archivos de stock</center></h3>
                </div>

                <div class="form-group">
                    <br></br>
                    <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" {...register("file")} id="inputFile"/>
                </div>
                
                <div class="form-group">
                    <br></br>
                    <input type="submit" />
                </div>

                
            </form>
            <h3 id="msj"></h3>

          
        </div>
    ); 

} 

export default UploadFiles;
