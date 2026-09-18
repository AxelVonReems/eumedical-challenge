import LegalTemplate from '../../components/legal/LegalTemplate';

export default function TermsOfService() {
  return (
    <LegalTemplate
      title="Términos y Condiciones del Cliente"
      lastUpdated="Actualizado recientemente"
      sections={[
        {
          heading: "AVISO IMPORTANTE",
          paragraphs: [
            "Usted está accediendo al servicio de telemedicina de Doctor en Casa SL (operando bajo la marca comercial \"Eumedical\"). Recuerde que esta plataforma no está indicada para resolver emergencias médicas, por lo que le rogamos si sufre una no utilice este sitio web, deberá dirigirse a un centro de salud u hospital de inmediato o llamar al número de emergencias sanitarias."
          ]
        },
        {
          heading: "ACEPTACIÓN Y AUTORIZACIÓN",
          paragraphs: [
            "Al presionar “ACEPTAR”, Usted manifiesta que es mayor de edad, ha leído con detenimiento este documento, se obliga a cumplir con lo aquí estipulado, acepta expresamente todas las disposiciones en él contenidas y cumple con otorgar la autorización correspondiente en favor de Doctor en Casa S.L. para el uso de esta plataforma y en beneficio de los especialistas, para los procedimientos y/o consultas que obtenga a través de esta. Autoriza a que le enviemos su informe médico, debidamente cifrado, tras mantener la consulta con los especialistas.",
            "Si Usted decide no aceptar, no estará autorizado a utilizar el servicio de telemedicina.",
            "El Usuario entiende que la aceptación, es equivalente a un contrato escrito y con este protocolo se da cumplimiento expreso a la legislación nacional vigente."
          ]
        },
        {
          heading: "CONTENIDO DEL SITIO WEB",
          paragraphs: [
            "Queda establecido que Doctor en Casa S.L. , no responderá por ningún daño o perjuicio que sea causado por el mal uso que el Usuario o cualquier tercero haga con la información que sea obtenida directa o indirectamente a través del sitio web, pues Usted entiende y acepta que ningún contenido disponible en el sitio web deberá ser interpretado como una opinión médica o de otra índole, a excepción de las informaciones que le suministre directamente y de forma individual el especialista, en el libre ejercicio de su profesión.",
            "El Usuario, entiende que Doctor en Casa SL está presente en los siguientes continentes: Europa, América, Asia, África y Oceanía y, que, en cada uno de ellos, el servicio de Telemedicina es prestado por especialistas, que se encuentran legalmente facultados para ofrecer servicios en su país. De estos términos, entiende y acepta que eventualmente pudiera ser atendido por médicos residenciados y facultados para ejercer la medicina en un país distinto al suyo; en todos los casos, el personal médico garantiza el cumplimiento del juramento hipocrático y las normas y leyes vigentes del país en el que se encuentra.",
            "Usted se compromete a proveer información correcta, veraz y actualizada al momento de registrarse o cuando realice la actualización de sus datos. En caso de proveer información falsa o incorrecta o de registrarse desde un país donde la empresa no tenga presencia, nos reservamos el derecho de suspender su cuenta y negarle el acceso al uso del sistema.",
            "En el caso de realizar la inscripción de un menor, esta deberá ser realizada por quien o quienes ostenten la patria potestad y queda bajo su responsabilidad el faltar a la verdad, de forma que usted/es manifiesta/n ostentar dicha patria potestad sobre su hijo/a, no habiéndole sido suspendida, limitada ni retirada por resolución judicial alguna, ni hallarse en trámites de procedimiento administrativo o jurisdiccional alguno con dicha finalidad o posible efecto."
          ]
        }
      ]}
    />
  );
}
