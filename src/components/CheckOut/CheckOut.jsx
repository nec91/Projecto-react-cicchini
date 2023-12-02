
export const CheckOut = ({ handleChange, handleSubmit, errors, cartList, total }) => {

    return (
        <>

            {cartList.map((product) =>
                <div key={product.id}>
                    <div>
                        <img className='' src={product.img} />
                        <div>{product.name}</div>
                        <div>Cantidad Seleccionada: {product.quantity}</div>
                    </div>
                    <h6>Total a abonar: ${total}</h6>
                    <h4>
                        Complete el formulario:
                    </h4>
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        onSubmit={handleSubmit}
                    >
                        <div >
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    name="nombre"
                                    onChange={handleChange}
                                />
                            </label>
                            {errors.nombre && <span style={{ color: "red" }}>{errors.nombre}</span>}
                        </div>

                        <div>
                            <label>
                                Apellido:
                                <input
                                    type="text"
                                    name="apellido"
                                    onChange={handleChange}

                                />
                            </label>
                            {errors.apellido && <span style={{ color: "red" }}>{errors.apellido}</span>}
                        </div>

                        <div >
                            <label>
                                Email:
                                <input
                                    type="text"
                                    name="email"
                                    onChange={handleChange}

                                />
                            </label>
                            {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                        </div>

                        <div >
                            <label>
                                Repetir email:
                                <input
                                    type="text"
                                    name="emailRepeat"

                                />
                            </label>
                            {errors.emailRepeat && (
                                <span style={{ color: "red" }}>{errors.emailRepeat}</span>
                            )}
                        </div>

                        <div >
                            <button >
                                Aceptar
                            </button>
                            <button type="button">Cancelar</button>
                        </div>
                    </form>
                </div>

            )}

        </>
    )
}
