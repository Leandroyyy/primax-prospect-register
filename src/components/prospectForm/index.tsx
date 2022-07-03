import InputMask from "react-input-mask";

export function ProspectForm() {
  function handleChange(e: React.FormEvent<HTMLInputElement>) {}

  return (
    <div className="flex items-center justify-center mt-5 bg-[#323232] py-10">
      <form className="items-center flex flex-col justify-center bg-gray-300 rounded-xl bg-opacity-10 p-7">
        <h2 className="text-white text-2xl font-bold mb-4">Pré-Cadastro</h2>
        <hr className="text-white w-full" />
        <div className="flex flex-col justify-center items-center pt-9">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-xs text-white px-1 mb-1 sm:text-sm"
            >
              Nome
            </label>
            <input
              type="text"
              placeholder="Nome"
              id="name"
              name="name"
              required
              className="w-64 h-7 mb-3 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-xs text-white mb-1 px-1 sm:text-sm"
            >
              Sobrenome
            </label>
            <input
              type="text"
              placeholder="Sobrenome"
              id="lastName"
              name="lastName"
              required
              className="w-64 h-7 mb-3 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
          </div>

          <div className="flex self-start mb-1">
            <h2 className="text-sm text-white ">Gênero:</h2>
          </div>

          <div className="flex mb-2">
            <div>
              <input
                className="sr-only peer"
                type="radio"
                value="M"
                name="gender"
                id="male"
              />
              <label
                className="flex py-0.5 px-2 text-sm bg-[#2196F3] text-white border rounded-lg cursor-pointer focus:outline-none hover:text-[#2196F3] hover:bg-gray-50 peer-checked:ring-[#2196F3] peer-checked:bg-white peer-checked:text-[#2196F3] peer-checked:ring-2 sm:text-lg duration-300"
                htmlFor="male"
              >
                Masculino
              </label>
            </div>

            <div className="mx-4 sm:mx-6">
              <input
                className="sr-only peer"
                type="radio"
                value="F"
                name="gender"
                id="female"
              />
              <label
                className="flex py-0.5 px-2 text-sm bg-[#2196F3] text-white border rounded-lg cursor-pointer focus:outline-none hover:text-[#2196F3] hover:bg-gray-50 peer-checked:ring-[#2196F3] peer-checked:bg-white peer-checked:text-[#2196F3] peer-checked:ring-2 sm:text-lg duration-300"
                htmlFor="female"
              >
                Feminino
              </label>
            </div>

            <div>
              <input
                className="sr-only peer"
                type="radio"
                value="P"
                name="gender"
                id="others"
              />
              <label
                className="flex py-0.5 px-2 text-sm bg-[#2196F3] text-white border rounded-lg cursor-pointer focus:outline-none hover:text-[#2196F3] hover:bg-gray-50 peer-checked:ring-[#2196F3] peer-checked:bg-white peer-checked:text-[#2196F3] peer-checked:ring-2 sm:text-lg duration-300"
                htmlFor="others"
              >
                Outros
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-xs text-white mb-1 px-1 sm:text-sm"
            >
              E-mail
            </label>
            <input
              type="email"
              placeholder="E-mail"
              id="email"
              name="email"
              required
              className="w-64 h-7 mb-3 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="cellphone"
              className="text-xs text-white mb-1 px-1 sm:text-sm"
            >
              Celular
            </label>
            <InputMask
              type="text"
              placeholder="(00)00000-0000"
              id="cellphone"
              mask="(99)99999-9999"
              name="cellphone"
              required
              className="w-64 h-7 mb-3 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label
              htmlFor="birthDate"
              className="text-xs text-white mb-1 px-1 sm:text-sm"
            >
              Data de Nascimento
            </label>
            <InputMask
              type="text"
              id="birthDate"
              name="birthDate"
              mask="99/99/9999"
              placeholder="dd/mm/yyyy"
              className="w-64 h-7 mb-3 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
          </div>

          <button
            type="submit"
            className="bg-[#2196F3] hover:bg-white px-3 py-1 text-lg text-white hover:text-[#2196F3] rounded-lg duration-300"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
