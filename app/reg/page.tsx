'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler, Form } from "react-hook-form"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
// import ErrorMessage from '@/app/components/errormessage';
// import LoadingDots from '@/app/components/Loading';
import { createUserSchema } from '../validators/userSchema';

type IssueForm = z.infer<typeof createUserSchema>;
const NewIssuePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createUserSchema)
    });
    const router = useRouter();
    const [error, setError] = useState('')
    const [isSubmitting, setSumbitting] = useState(false);

    return (
        <div className='max-w-xl mx-auto'>

            <form onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.post('/api/auth', data)
                    router.push('/')
                    setSumbitting(true);
                } catch (error) {
                    setError("Unexpected error occured.");
                    setSumbitting(false)
                }
            })}>
                < div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text">Email</span>
                        {/* <span className="label-text-alt">Almas gay</span> */}
                    </label>
                    <input type="email" placeholder="example@gmail.com" {...register('email')}
                        className="input input-bordered w-full" />

                </div>

                < div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text">Password</span>
                        {/* <span className="label-text-alt">Almas gay</span> */}
                    </label>
                    <input type="password" placeholder="********" {...register('password')}
                        className="input input-bordered w-full" />

                </div>
                {/* <ErrorMessage>
                    {errors.description?.message}
                </ErrorMessage> */}
                < div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text">Name</span>
                        {/* <span className="label-text-alt">Almas gay</span> */}
                    </label>
                    <input type="text" placeholder="Type here" {...register('name')}
                        className="input input-bordered w-full" />

                </div>

                < div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text">Role</span>
                        {/* <span className="label-text-alt">Almas gay</span> */}
                    </label>
                    <input type="text" placeholder="Type here" {...register('role')}
                        className="input input-bordered w-full" />

                </div>

                <button disabled={isSubmitting} className="btn btn-outline btn-primary my-5">Submit new issue</button>
            </form>
        </div>
    )
}

export default NewIssuePage