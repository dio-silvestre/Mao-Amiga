import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  FiMail,
  FiLock,
  FiUser,
  FiMap,
  FiMapPin,
  FiHeart,
  FiKey,
  FiThumbsUp,
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Content,
  AnimationContainer,
  Switch,
} from "./styles";
import RegisterBallons from "../../assets/RegisterBallons.svg";
import RegisterWhiteLogo from "../../assets/RegisterWhiteLogo.svg";
import RegisterLogo from "../../assets/logo.svg";
import LoginGirl from "../../assets/LoginGirl.svg";
import LoginGroup from "../../assets/LoginGroup.svg";
import { useState } from "react";
import { useUser } from "../../providers/User";

const Register = () => {
  const { createAccount } = useUser();

  const [userType, setUserType] = useState("");

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),
    city: yup.string().required("Cidade obrigatória"),
    state: yup.string().required("Estado obrigatório"),
    areas: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    password_confirm: yup.string().required("Senhas não correspondentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ name, email, city, state, areas, password }) => {
    const newUser = {
      name,
      email,
      city,
      state,
      areas,
      password,
      user_type: userType,
    };

    //console.log(newUser);

    createAccount(newUser);
  };

  return (
    <Container>
      <Header>
        <div>
          <img src={RegisterLogo} alt="Mão Amiga Logo" />
          <div className="textBox1">
            <h1>Recrute! </h1>
            <p>Aqui você pode encontrar voluntários para sua ação social</p>
          </div>
          <div>
            <h1>Procurando fazer o bem ?</h1>
            <p>Aqui você pode pesquisar por ações sociais para fazer parte!</p>
          </div>
        </div>
      </Header>

      <div className="text"></div>
      <div className="text2">Cadastre-se</div>
      <Content>
        <div className="form-mobile">
          <AnimationContainer>
            <Switch>
              <button onClick={() => setUserType("institution")}>
                Instituição
              </button>
              <button onClick={() => setUserType("voluntary")}>
                Voluntário
              </button>
            </Switch>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <Input
                register={register}
                name="name"
                icon={FiUser}
                label="Nome"
                placeholder="Digite seu nome"
                colorSchema
                error={errors.name?.message}
              />
              <Input
                register={register}
                name="email"
                icon={FiMail}
                label="E-mail"
                placeholder="Digite seu e-mail"
                colorSchema
                error={errors.email?.message}
              />
              <Input
                register={register}
                name="city"
                icon={FiMap}
                label="Cidade"
                placeholder="Digite sua cidade"
                colorSchema
                error={errors.city?.message}
              />
              <Input
                register={register}
                name="state"
                icon={FiMapPin}
                label="Estado"
                placeholder="Digite seu estado"
                colorSchema
                error={errors.state?.message}
              />

              <Input
                register={register}
                name="areas_interest"
                icon={FiMapPin}
                label="Áreas de interesse"
                placeholder="Selecione abaixo"
                colorSchema
                error={errors.areas?.message}
              />
              <Input
                register={register}
                name="password"
                icon={FiLock}
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                colorSchema
                error={errors.password?.message}
              />
              <Input
                register={register}
                name="password_confirm"
                icon={FiLock}
                label=" Confirme sua senha"
                placeholder="*********"
                type="password"
                colorSchema
                error={errors.password_confirm?.message}
              />
              {userType === "" ? (
                <Button type="submit" theme="login" disabled="true">
                  Entrar
                </Button>
              ) : (
                <Button type="submit" theme="login">
                  Entrar
                </Button>
              )}

              <div>
                <p>
                  Já possui uma conta?
                  <Link to="/login">Faça o Login</Link>
                </p>
              </div>
            </form>
          </AnimationContainer>
        </div>
        <div className="images">
          <img
            className="ellipse"
            src={RegisterBallons}
            alt="Figura com elipse"
          />
        </div>
      </Content>
    </Container>
  );
};

export default Register;
