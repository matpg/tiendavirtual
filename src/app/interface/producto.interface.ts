export interface ListaProducto {
    productos?: Producto[];
}

export interface Producto {
    id?: number;
    nombre?: string;
    descripcion?: string;
    precio?: number | string;
}