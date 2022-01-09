import { Component } from "react";
import { Container, Nav, Tab, Row, Col  } from "react-bootstrap";


export default class About extends Component {
    render(){
        return(
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Design Vestimentar</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Design Grafic</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Design Interior</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Design Patterns</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://figmaelements.com/wp-content/uploads/2019/11/gift-shop-website-template.png"></img>
                                    <p>
                                    Design este un cuvânt de origine engleză care se pronunță [ pron. di-zain ] și care înseamnă proiect (plan), desen (de concepție), schiță (de concepție) 
                                    produs pentru a arăta aspectul și funcțiunile unui obiect ori sistem (lucrările unei clădiri, îmbrăcăminte, ori altui obiect) înainte de a fi făcut. Folosirea 
                                    termenului în domeniul desenului liber (artă) este forțată și deci nerecomandată. A design is a plan or specification for the construction of an object or system 
                                    or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process
                                    Termenul de "design" a apărut in 1851, în legătură cu complicatele realități ale producției industriale. Este o concepție și o metodă de
                                    creație care urmărește să asigure fiecărui produs un înalt randament funcțional, însoțit de un aspect agreabil. În toate epocile de înflorire
                                    umană a existat o corelare între posibilitățile materiale, nivelul tehnologic, relațiile economice interne și externe, orizontul spiritual exprimat
                                    prin gustul artistic și capacitatea de creație. Mai mult chiar, tehnologul și artistul se confundau la început într-o singură persoană.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="second">
                                    <img src="https://blog.cusutsibrodat.ro/wp-content/uploads/2020/08/designer-vestimentar.jpg"></img>
                                    <p>
                                    Primul designer vestimentar, care nu a fost doar un simplu croitor de haine ci creatorul conceptului și al noțiunii de couturier a fost, fără îndoială, Charles Frederick 
                                    Worth (1826 - 1895), un englez care a prosperat în Paris, fiind considerat Le Père (Parintele) de (al) Haute Couture.Înainte ca acest negustor de haine (în engleză, draper) 
                                    să-și fi creat propria sa maison couture (casă de modă) în Paris, designul și realizarea concretă a îmbrăcămintei era creația unui număr mare de croitorese anonime, iar așa-zisa 
                                    modă era copiată după hainele purtate la casele regale.Succesul incontestabil al lui Worth s-a bazat pe puterea de convingere a acestuia care știa să impună clienților săi ce să poarte, 
                                    în loc de a asculta și executa ceea ce aceștia doreau sau ar fi dorit să poarte. Datorită succesului său de neegalat până la idea sa revoluționară, clienții săi erau în situația nu numai 
                                    de a purta haine deosebite de cele obișnuite, realizate la House of Worth, dar și de a fi mândri de a purta haine având o anume marcă specifică.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="third">
                                    <img src="https://gabrieladesign.ro/wp-content/uploads/2021/05/graphic-designer-in-jeddah.jpg"></img>
                                    <p>
                                    Designul grafic este procesul comunicare-vizual și rezolvarea problemelor de folosire a tipografiei, fotografiei și a ilustrației. Câmpul grafic al designului este considerat a fi un subgrup al
                                    comunicării vizuale și comunicare-design, dar uneori termenul de "graphic design" este folosit ca și sinonim. Designerii grafici creează și combină simboluri, imagini și text într-o formă reprezentativă
                                    de idei și imagini. Aceștia utilizează tipografia, arta vizuală și tehnici de scheme de pagină pentru a crea compoziții vizuale. Termenul de grafic design include designul corporativ (logo-uri și mărci), 
                                    designul editorial (magazine, știri, și cărți) designul mediului înconjurător, reclame, web design, design de comunicare, design de ambalaje, și design de semnalizare.
                                    Rolul designerului grafic în procesul de comunicare este acela de codificator sau interpret al mesajului. Lucrează la interpretarea, ordonarea și prezentarea mesajelor vizuale. Lucrarea de design pornește 
                                    întotdeauna de la cererea unui client, o cerere care ajunge să fie stabilită lingvistic, fie oral, fie în scris, iar designul grafic transformă mesajul lingvistic într-o manifestare grafică.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/intoria-interior-design-website-template.jpg"></img>
                                    <p>
                                    Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone 
                                    who plans, researches, coordinates, and manages such enhancement projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, 
                                    communicating with the stakeholders of a project, construction management, and execution of the design.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://image.slidesharecdn.com/2008-1210-do-it-with-drupal-1229385233426622-1/95/slide-41-1024.jpg"></img>
                                    <p>
                                    In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly 
                                    into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to 
                                    solve common problems when designing an application or system. Object-oriented design patterns typically show relationships and interactions between classes or objects, without specifying the final application classes or 
                                    objects that are involved. Patterns that imply mutable state may be unsuited for functional programming languages. Some patterns can be rendered unnecessary in languages that have built-in support for solving the problem 
                                    they are trying to solve, and object-oriented patterns are not necessarily suitable for non-object-oriented languages.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
     
}