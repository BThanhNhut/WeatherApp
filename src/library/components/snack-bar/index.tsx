// import React, {
//   createRef,
//   forwardRef,
//   useCallback,
//   useImperativeHandle,
//   useState,
// } from 'react';
// import {StyleSheet, View} from 'react-native';

// import {DURATION_HIDE} from './constants';
// import {SnackItem} from './snack-bar-item';
// import {styles} from './styles';
// import {Item, TypeMessage} from './type';

// const SnackBarComponent = forwardRef((_, ref) => {
//   const [data, setData] = useState<Item[]>([]);

//   const onPop = useCallback((item: Item) => {
//     setData(d => d.filter(x => x.id !== item.id));
//   }, []);

//   const _renderItem = (item: Item, index: number) => (
//     <SnackItem index={index} key={item.id} {...{item, onPop}} />
//   );

//   useImperativeHandle(
//     ref,
//     () => ({
//       show: ({
//         interval = DURATION_HIDE,
//         msg,
//         type = 'success',
//       }: {
//         msg: string;
//         interval: number;
//         type: TypeMessage;
//       }) => {
//         setData(d =>
//           d.concat([
//             {
//               id: randomUniqueId(),
//               interval,
//               msg,
//               type,
//             },
//           ]),
//         );
//       },
//     }),
//     [],
//   );

//   return (
//     <View
//       pointerEvents={'box-none'}
//       style={[StyleSheet.absoluteFillObject, styles.container]}>
//       {data.map(_renderItem)}
//     </View>
//   );
// });

// type SnackBar = {
//   show: (data: {msg: string; interval?: number; type?: TypeMessage}) => void;
// };

// export const snackBarRef = createRef<SnackBar>();

// export const SnackBar = () => <SnackBarComponent ref={snackBarRef} />;

// export const showSnack = ({
//   msg,
//   interval,
//   type,
// }: {
//   msg: string;
//   interval?: number;
//   type?: TypeMessage;
// }) => {
//   snackBarRef.current?.show({interval, msg, type});
// };
