import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import FaqForm from './FaqForm';

class FaqContent extends Component {
    render() {
        return (
            <section className="faq-area ptb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="faq-accordion">
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Which material types can you work with?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is smart lock required for instant apps?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Can I have multiple activities in a single feature?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Which material types can you work with?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Why choose our services in your business?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How to get start with us?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Why choose our services in your business?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="faq-content">
                                <div className="section-title">
                                    <span>Ask Question</span>
                                    <h2>Frequently Asked Questions?</h2>
                                    <p>Veniam quis nostrud exercitation ullamco laboris nist aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur excepteur sint occaecat aboris nisi ut aliquip.</p>
                                </div>

                                <div className="faq-image">
                                    <img src="/images/faq.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Faq Form */}
                    <FaqForm />
                </div>
            </section>
        );
    }
}

export default FaqContent;