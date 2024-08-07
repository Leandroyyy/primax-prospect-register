import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import InputMask from "react-input-mask";
import { evoUrl } from "../../auth/evoAuth";
import { ProspectFinished } from "../prospectFinished";

interface Prospect {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  birthday: string;
  gender: string;
  currentStep: string;
  tokenWellhub?: string;
}

export function ProspectForm() {
  const [modal, setModal] = useState<boolean>(false);
  const [genderNull, isGenderNull] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  const [resetCellphone, setResetCellphone] = useState<string>();
  const [resetBirthday, setResetBirthday] = useState<string>();
  const [alreadyExistsEmail, isAlreadyExistsEmail] = useState<boolean>(false);
  const [alreadyExistsCellphone, isAlreadyExistsCellphone] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Prospect>();

  const registerValidations = {
    name: {
      required: "O nome é obrigatório",
    },
    lastName: {
      required: "O sobrenome é obrigatório",
    },
    email: {
      required: "O email é obrigatório",
    },
    cellphone: {
      required: "O número de celular é obrigatório",
    },
    birthday: {
      required: "A data de nascimento é obrigatório",
    },
    tokenWellhub: {
      minLength: 13,
      message: "Deve possuir 13 digitos",
    },
  };

  async function handleData(data: Prospect): Promise<Prospect> {
    isAlreadyExistsEmail(false);
    isAlreadyExistsCellphone(false);
    isGenderNull(false);
    isLoading(true);

    let date = data.birthday.split("/");

    let day = date[0];
    date[0] = date[1];
    date[1] = day;

    data.birthday = date.join("/");

    data.name = data.name.toUpperCase();
    data.lastName = data.lastName.toUpperCase();
    data.currentStep = "AGENDAR AULA EXPERIMENTAL";

    if (!data.gender) {
      isGenderNull(true);
      isLoading(false);
      throw new Error("Favor coloque o gênero");
    }

    const emailAlreadyExists = await evoUrl
      .get(`/members?email=${data.email}`)
      .then((request) => request.data);

    if (emailAlreadyExists.length != 0) {
      isLoading(false);
      isAlreadyExistsEmail(true);
      throw new Error("email ja existe");
    }

    const cellphoneAlreadyExistsProspect = await evoUrl
      .get(`/prospects?phone=${data.cellphone}`)
      .then((request) => request.data);

    const cellphoneAlreadyExistsMember = await evoUrl
      .get(`/members?phone=${data.cellphone}`)
      .then((request) => request.data);

    if (
      cellphoneAlreadyExistsProspect.length != 0 ||
      cellphoneAlreadyExistsMember.length != 0
    ) {
      isLoading(false);
      isAlreadyExistsCellphone(true);
      throw new Error("celular já existe");
    }

    return data;
  }

  const onSubmit = handleSubmit(async (prospect) => {
    const allData = await handleData(prospect);

    const { data } = await evoUrl
      .post("/prospects", allData)
      .then()
      .catch((e: any) => {
        throw new Error(e.message);
      });

    //this only exists to add tokenWellhub the post route doesnt work to create a prospect with tokenWellhub
    await evoUrl
      .put("/prospects", { ...allData, idProspect: data.idProspect })
      .then()
      .catch((e: any) => {
        throw new Error(e.message);
      });

    isLoading(false);
    setModal(true);
  });

  function onChangeBirthday(e: React.FormEvent<HTMLInputElement>) {
    const birthday = e.currentTarget.value;

    setResetBirthday(birthday);
  }

  function onChangeCellphone(e: React.FormEvent<HTMLInputElement>) {
    const cellphone = e.currentTarget.value;

    setResetCellphone(cellphone);
  }

  function resetForm() {
    reset();

    setResetBirthday("");
    setResetCellphone("");

    setModal(false);
  }

  return (
    <div className="flex items-center justify-center mt-5 bg-[#323232] py-10">
      <form
        onSubmit={onSubmit}
        className="items-center flex flex-col justify-center bg-gray-300 rounded-xl bg-opacity-10 p-7"
      >
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
              {...register("name", registerValidations.name)}
              className="w-64 h-7 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
            <small className="text-red-500 mb-2 px-2">
              {errors?.name && errors.name.message}
            </small>
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
              {...register("lastName", registerValidations.lastName)}
              defaultValue=""
              className="w-64 h-7 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
            <small className="text-red-500 mb-2 px-2">
              {errors?.lastName && errors.lastName.message}
            </small>
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
                {...register("gender")}
                defaultValue=""
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
                {...register("gender")}
                defaultValue=""
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
                {...register("gender")}
                defaultValue=""
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

          <small className="text-red-500 mb-2 px-2">
            {genderNull ? "Selecione o Gênero" : ""}
          </small>

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
              {...register("email", registerValidations.email)}
              defaultValue=""
              className="w-64 h-7 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
            <small className="text-red-500 mb-2 px-2">
              {errors?.email && errors.email.message}
              {alreadyExistsEmail ? "E-mail já existente" : ""}
            </small>
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
              {...register("cellphone", registerValidations.cellphone)}
              defaultValue=""
              onChange={onChangeCellphone}
              value={resetCellphone}
              className="w-64 h-7 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
            <small className="text-red-500 mb-2 px-2">
              {errors?.cellphone && errors.cellphone.message}
              {alreadyExistsCellphone ? "Celular já existente" : ""}
            </small>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="birthday"
              className="text-xs text-white mb-1 px-1 sm:text-sm"
            >
              Data de Nascimento
            </label>
            <InputMask
              type="text"
              id="birthday"
              mask="99/99/9999"
              {...register("birthday", registerValidations.birthday)}
              defaultValue=""
              onChange={onChangeBirthday}
              value={resetBirthday}
              placeholder="dd/mm/yyyy"
              className="w-64 h-7 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
            <small className="text-red-500 mb-3 px-2">
              {errors?.birthday && errors.birthday.message}
            </small>
          </div>

          <div className="flex flex-col mb-5">
            <label
              htmlFor="tokenWellhub"
              className="text-xs text-white mb-1 px-1 sm:text-sm"
            >
              Token Wellhub (caso possuir convênio)
            </label>
            <input
              type="text"
              placeholder="Token Wellhub"
              id="tokenWellhub"
              {...register("tokenWellhub", registerValidations.tokenWellhub)}
              defaultValue=""
              max="13"
              min="13"
              maxLength={13}
              className="w-64 h-7 sm:w-[30rem] sm:h-10 sm:text-xl focus:border-1 focus-visible:ring rounded-md outline-none focus:border-[#2196F3] focus:placeholder-[#2196f3] pl-3"
            />
            <small className="text-red-500 mb-2 px-2">
              {errors?.tokenWellhub && <>Deve possuir 13 dígitos</>}
            </small>
          </div>

          <button
            type="submit"
            className="bg-[#2196F3] hover:bg-white px-3 py-1 text-lg text-white hover:text-[#2196F3] rounded-lg duration-300"
          >
            Cadastrar
          </button>
        </div>
      </form>

      <ProspectFinished trigger={modal} setTrigger={() => resetForm()} />

      {loading ? (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
          <AiOutlineLoading3Quarters className="text-[#2196f3] text-5xl animate-spin" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
