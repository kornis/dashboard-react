import React from 'react'
import TableRow from './TableRow';

let data = [{
    "name":"Jane Doe",
    "description":"Fullstack developer",
    "price":"$320,800",
    "categories":<ul><li>Category 01</li><li>Category 02</li><li>Category 03</li></ul>,
    "colors":<ul><li><span class="text-danger">Red</span></li><li><span class="text-primary">Blue</span></li><li><span class="text-success">Green</span></li></ul>,
    "stock":245,
},
{
    "name":"Tiger Nixon",
    "description":"System Architect",
    "price":"$320,800",
    "categories":<ul><li>Category 01</li><li>Category 02</li><li>Category 03</li></ul>,
    "colors":<ul><li><span class="text-danger">Red</span></li><li><span class="text-primary">Blue</span></li><li><span class="text-success">Green</span></li></ul>,
    "stock":245,
},
]

function Table() {
    return(
        <div class="card shadow mb-4">
						<div class="card-body">
							<div class="table-responsive">
								<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
											<th>Name</th>
											<th>Description</th>
											<th>Price</th>
											<th>Categories</th>
											<th>Colors</th>
											<th>Stock</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
											<th>Name</th>
											<th>Description</th>
											<th>Price</th>
											<th>Categories</th>
											<th>Colors</th>
											<th>Stock</th>
										</tr>
									</tfoot>
									<tbody>
                                        {data.map((d,i) => <TableRow key={d.name + i} values={d}/> )}
									</tbody>
								</table>
							</div>
						</div>
					</div>
    );
}

export default Table;