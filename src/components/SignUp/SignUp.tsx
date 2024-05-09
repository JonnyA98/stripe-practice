"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import {user, User} from "./SignUpSchema"
import Form, {FormConfig} from "../Form/Form";
import FormButtons from "../Form/FormButtons/FormButtons";
import Notification from '../Notification/Notification';



const SignUp = () => {
    const [notification, setNotification] = useState({ show: false, type: "", message: "" });
        
    const {
        reset,
        handleSubmit,
        control,
        watch,
        trigger,
        formState : {errors}
        } = useForm<User>(
            {
          resolver: zodResolver(user),
         defaultValues: {
            name: "",
            password: "",
            confirmPassword: "",
            email: "",
         },
        }
        );

       

        const createUser = async (data: User) => {
            try{
                await axios.post(process.env.DUB_URL || "http://127.0.0.1:8000/users/", {name: data.name, password: data.password, email:data.email });
                setNotification({ show: true, type: "success", message: "User added successfully" });
            }catch(errors){
                setNotification({ show: true, type: "error", message: "Error, user not added" });
            }
        }

        const onSubmit = async (data: User) => {
             await createUser(data)
             reset()
        };

      

        const onCancel = () => {
                reset();
                setNotification({ show: false, type: "", message: "" });
        };


        const userFormConfig: FormConfig[] = [
            {   label: "Name",
                fieldName: "name",
                category: "text",
                required: true,
            },
            {   label: "Password",
                fieldName: "password",
                category: "text",
                required: true,
                type: "password"
            },
            {   label: "Confirm Password",
                fieldName: "confirmPassword",
                category: "text",
                required: true,
                type: "password"
            },
            {   label: "Email",
                fieldName: "email",
                category: "text",
                required: true,
            },
        ]

        
       
    
    return (
        <section className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
           
            <h1 className="text-xl font-bold text-center mb-6">Sign up</h1>
            <Form
            control={control}
            config={userFormConfig}
            errors={errors}
            />
            <FormButtons
            handleSubmit={handleSubmit(onSubmit)}
            handleCancel={onCancel}
            />
            {notification.show && (notification.type === "error" || notification.type === "success") && (
                <Notification type={notification.type} message={notification.message} />
            )}

        </section>
    )

}


export default SignUp