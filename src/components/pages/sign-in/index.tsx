import * as React from 'react';
import './style.scss';
import {RfInput} from "../../common/rf-input";
import {RsButton} from "../../common/rf-button";
import {DefaultButton} from "../../common/default-button";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router';
import * as AuthActions from '../../../redux/actions/auth';
import {DefaultState} from "../../../redux/reducers";

export const SignInPage: React.FunctionComponent = () => {

  const authorized = useSelector<DefaultState, boolean>(state => state.app.authorized);
  const history = useHistory();

  if (authorized) {
    history.push('/');
  }

  const dispatch = useDispatch();
  const [user, setUser] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");

  const onAuth = () => {
    dispatch(AuthActions.request({
      user, pass
    }));
  }

  return (
    <div className="Container Sign-in">
      <div className="Form-Wrapper">
        <h1>Reactflix</h1>
        <h2>Iniciar sesión</h2>
        <RfInput
          placeholder="¿Cuál es tu correo electrónico?"
          value={user}
          onChange={(newValue: string) => setUser(newValue)}
        />
        <RfInput
          placeholder="¿Cuál es tu contraseña?"
          secureTextEntry={true}
          value={pass}
          onChange={(newValue: string) => setPass(newValue)}
        />
        <RsButton onClick={onAuth} text="Iniciar sesión"/>
        <p>¿Has olvidado tu contraseña?</p>
      </div>
      <div className="Banner-Wrapper">
        <div className="Horizontal-Gradient"/>
        <div className="Promo-Wrapper">
          <h3>Las mejores historias en un mismo lugar.</h3>
          <div className="Subscription-Wrapper">
            <div className="Subscription-block">
              <p className="Prize-label">5,99€ <span>Mes</span></p>
              <p>Contrátalo sin compromisos.</p>
              <DefaultButton text="Suscríbete ahora"/>
            </div>
            <div className="Subscription-block">
              <p className="Prize-label">59,99€ <span>Año</span></p>
              <p>Ahorra 60 días con tu suscripción anual.</p>
              <DefaultButton text="Suscripción anual" />
            </div>
          </div>
          <div className="Crossplatform-Wrapper">
            <h4>Servicio multiplataforma</h4>
          </div>
        </div>
      </div>
    </div>
  );

}
