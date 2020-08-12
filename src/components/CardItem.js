import React from 'react';
import PropTypes from 'prop-types';

function CardItem(props) {
    return(
                    <div className="col-md-4 mb-4">
							<div className={`card border-left-${props.color} shadow h-100 py-2`}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.title}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{ props.number }</div>
										</div>
										<div className="col-auto">
											<i className={`fas fa-${props.icon} fa-2x text-gray-300`}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
    );
}

CardItem.propTypes = {
	color: PropTypes.string,
	title: PropTypes.string,
	number: PropTypes.string,
	icon: PropTypes.string
}
CardItem.defaultProps = {
	color: "primary",
	title: "Título",
	number: "0",
	icon: ""
}

export default CardItem;