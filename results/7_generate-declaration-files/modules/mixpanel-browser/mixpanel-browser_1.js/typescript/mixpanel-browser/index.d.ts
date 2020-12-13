export interface I__config {
    batch_size: number;
}
export interface I__options {
    truncated_data: object;
    endpoint: string;
    batcher?: undefined;
    should_send_immediately?: undefined;
    send_request_options: object;
}
export function _init(token: string, config?: undefined, name: string): void;
export function set_config(config: I__config): void;
export function get_config(prop_name: string): string | boolean | null | number | Function | void | any[];
export function _gdpr_init(): void;
export function has_opted_out_tracking(options?: undefined): boolean;
export function _gdpr_call_func(func: Function, options?: undefined): boolean;
export function has_opted_in_tracking(options?: undefined): boolean;
export function get_distinct_id(): void;
export function get_property(property_name: string): void;
export function register_once(props: object, default_value: string, days?: undefined): void;
export function hasOwnProperty(): boolean;
export function _loaded(): void;
export function _set_default_superprops(): void;
export function track(): object;
export function _event_is_disabled(event_name: string): boolean;
export function _track_or_batch(options: I__options, callback: Function): object;
export function _prepare_callback(callback: Function, data: object): string;
export function _send_request(url: string, data: object, options: object, callback: string): boolean;
export function _check_and_handle_triggered_notifications(): void;
