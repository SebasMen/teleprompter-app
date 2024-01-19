import { useFormik } from "formik"

import { InputText } from "../../components"

import { ILoginForm } from "../../interfaces"

const initialValues: ILoginForm = {
  email: '',
  password: '',
}

export const Login = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form className="w-96">
      <InputText
        label="Email *"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        errorMessage={formik.errors.email}
      />

      <InputText
        label="Password *"
        name="password"
        type="password"
        classContainer="mt-4"
        value={formik.values.password}
        onChange={formik.handleChange}
        errorMessage={formik.errors.password}
      />

      <section className="mt-4">
        <button
          type="submit"
          className="flex w-full justify-center text-sm font-semibold leading-6 px-3 py-1.5 text-white rounded-md shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Entrar
        </button>
        <span className="block text-sm text-center font-semibold leading-6 mt-4 cursor-pointer hover:underline">Crear una cuenta</span>
      </section>
    </form>
  )
}
