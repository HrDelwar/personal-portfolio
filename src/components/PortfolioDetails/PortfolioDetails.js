import React from 'react';
import { projects } from '../Portfolio/Portfolio';



const PortfolioDetails = () => {
    return (
        <>
            {
                projects.map((project, index) =>
                    <div id={"portfolioItem" + (index + 1)} class="modal" role="dialog" key={project.liveSite}>
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button class="custom-tooltip close bg-danger" data-dismiss="modal">
                                        <span class="glyphicon glyphicon-remove"></span>
                                        <span class="custom-tooltip-item tooltip-left">Close</span>
                                    </button>
                                    <img class="img-res" src={project.img} alt={project.name} />
                                </div>
                                <div class="modal-body">
                                    <h4 class="modal-title">{project.name}</h4>
                                    <p>Implements By: {project.implementsBy}</p>
                                    {
                                        project.description.map(point =>
                                            <p>{point}</p>
                                        )
                                    }
                                </div>
                                <div class="modal-footer">
                                    <a href={project.liveSite} class="custom-tooltip mr-1" target="_blank" rel="noreferrer">
                                        Live Site
                                    </a>
                                    <a href={project.codeLinkClient} target="_blank" rel="noreferrer" class="custom-tooltip mr-1">
                                        Client Code
                                    </a>
                                    {project.codeLinkServer && <a href={project.codeLinkServer} target="_blank" rel="noreferrer" class="custom-tooltip mr-1">
                                        Server Code
                                    </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default PortfolioDetails;