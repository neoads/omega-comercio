import Header from './components/Header';
import omegaLogoImage from './assets/omega_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={omegaLogoImage} alt="Omega Comércio" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Omega Comércio</h1>
          <h2 className="text-2xl mb-8">61.324.567/0001-08</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer soluções completas em comércio e serviços ópticos com qualidade, inovação e excelência no atendimento, transformando a experiência visual dos nossos clientes. Com 3 meses de atuação no mercado, buscamos superar as expectativas através de produtos de alta qualidade, tecnologia avançada e atendimento personalizado, sempre com transparência e comprometimento. Nossa missão é ajudar a proporcionar uma visão clara e confortável, tornando cada consulta uma experiência única e satisfatória."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
          <p className="text-lg"><a href="https://www.instagram.com/omegaopticos/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">INSTAGRAM</a></p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Omega Comércio e Serviços Ópticos</strong>, registrada sob o CNPJ <strong className="font-bold">61.324.567/0001-08</strong>, foi fundada em <strong className="font-bold">16 de junho de 2025</strong>, na cidade de <strong className="font-bold">Fortaleza, Ceará</strong>. Como uma empresa em crescimento no mercado, atuamos no segmento de <strong className="font-bold">comércio e serviços ópticos</strong>, oferecendo produtos que unem <strong className="font-bold">tecnologia, qualidade e precisão</strong> para proporcionar a melhor experiência visual aos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal, conforme a Receita Federal, é <strong className="font-bold">Comércio Varejista de Artigos de Óptica (CNAE 47.74-1-00)</strong>, abrangendo desde óculos de grau até lentes de contato e acessórios que complementam e personalizam cada necessidade visual. Com <strong className="font-bold">3 meses de atuação</strong>, nos destacamos pela <strong className="font-bold">variedade de produtos, tecnologia avançada e atendimento especializado</strong>, sempre buscando atender às necessidades visuais e expectativas dos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Rua Desembargador Lauro Nogueira, 1500, Loja 1171 - L1, Papicu, Fortaleza-CE (CEP 60176-065)</strong>, nossa óptica é referência no bairro e região, proporcionando uma experiência visual completa e personalizada. Valorizamos a <strong className="font-bold">transparência, a precisão e a satisfação do cliente</strong>, garantindo que cada atendimento seja executado com excelência.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Omega Comércio e Serviços Ópticos</strong>, acreditamos que <strong className="font-bold">uma visão clara reflete o cuidado de quem a proporciona</strong>. Por isso, nosso compromisso vai além da venda de produtos ópticos: queremos ajudar você a enxergar <strong className="font-bold">o mundo com clareza, conforto e estilo</strong>, seja no trabalho, estudos ou lazer.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Óculos de Grau e Sol</strong> – Modelos que combinam <strong className="font-bold">tecnologia, design e qualidade</strong>.</li>
            <li><strong className="font-bold">Lentes de Contato</strong> – Variedade de opções para diferentes necessidades visuais.</li>
            <li><strong className="font-bold">Exames de Vista</strong> – Avaliação completa da saúde ocular com equipamentos modernos.</li>
            <li><strong className="font-bold">Atendimento Especializado</strong> – Consultoria personalizada para escolha dos melhores produtos.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Omega Comercio e Servicos Opticos LTDA</li>
            <li><strong className="font-bold">CNPJ:</strong> 61.324.567/0001-08</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 16/06/2025</li>
            <li><strong className="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 16/06/2025</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 16/06/2025</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 50.000,00</li>
            <li><strong className="font-bold">Inscrição Estadual (CE):</strong> 06.987.654-3</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Rua Desembargador Lauro Nogueira, 1500, Loja 1171 - L1, Papicu, Fortaleza-CE, <strong className="font-bold">CEP 60176-065</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Omega Comércio e Serviços Ópticos</strong>, estamos prontos para ajudar você a <strong className="font-bold">enxergar o mundo com clareza</strong>. Agende sua consulta e descubra como <strong className="font-bold">uma visão perfeita pode transformar sua qualidade de vida!</strong> 👓✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Omega Comercio e Servicos Opticos LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 61.324.567/0001-08</p>
          <p className="text-sm"><strong>Razão Social:</strong> OMEGA COMERCIO E SERVICOS OPTICOS LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 16/06/2025</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 50.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Desembargador Lauro Nogueira, 1500, Loja 1171 - L1, Papicu, Fortaleza-CE</p>
          <p className="text-sm"><strong>CEP:</strong> 60176-065</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Transformando a visão com qualidade e tecnologia desde 2025</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Omega Comercio e Servicos Opticos LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 61.324.567/0001-08</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Desembargador Lauro Nogueira, 1500, Loja 1171 - L1, Papicu, Fortaleza-CE, CEP 60176-065</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante visitas à nossa óptica.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou entregas).</li>
                <li>Preferências visuais e necessidades ópticas.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, agendamento de consultas e confirmação de serviços.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de logística (apenas informações necessárias para entrega).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Omega Comércio e Serviços Ópticos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

